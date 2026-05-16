import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { NewsSection } from './components/NewsSection';
import { IPSection } from './components/IPSection';
import { CPSection } from './components/CPSection';
import { JournalSection } from './components/JournalSection';
import { ShopSection } from './components/ShopSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArticleDetail } from './components/ArticleDetail';
import { newsArticles } from './data/news';
import { journalArticles } from './data/journal';

export type Page =
  | 'home'
  | 'about'
  | 'news'
  | 'collection'
  | 'shop'
  | 'news-detail'
  | 'journal-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const handleSetActiveSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openNewsArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentPage('news-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openJournalArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentPage('journal-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeArticle = () => {
    const fromKind = currentPage === 'news-detail' ? 'news' : 'journal';
    setSelectedArticleId(null);
    if (fromKind === 'news') {
      setCurrentPage('news');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('journal');
        if (el) {
          const offsetTop = el.offsetTop - 96;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  // 記事詳細ページ
  if (currentPage === 'news-detail' && selectedArticleId) {
    const article = newsArticles.find((a) => a.id === selectedArticleId);
    if (article) {
      return (
        <div className="min-h-screen bg-white">
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <ArticleDetail article={article} kind="news" onBack={closeArticle} />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      );
    }
  }

  if (currentPage === 'journal-detail' && selectedArticleId) {
    const article = journalArticles.find((a) => a.id === selectedArticleId);
    if (article) {
      return (
        <div className="min-h-screen bg-white">
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <ArticleDetail article={article} kind="journal" onBack={closeArticle} />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      );
    }
  }

  // ホームページの場合は全セクションを表示
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <HeroSection setActiveSection={handleSetActiveSection} />
        <div id="about">
          <AboutSection isPreview={true} onViewMore={() => setCurrentPage('about')} />
        </div>
        <div id="news">
          <NewsSection
            isPreview={true}
            onViewMore={() => setCurrentPage('news')}
            onArticleClick={openNewsArticle}
          />
        </div>
        <div id="ip">
          <IPSection />
        </div>
        <div id="cp">
          <CPSection />
        </div>
        <div id="journal">
          <JournalSection onArticleClick={openJournalArticle} />
        </div>
        <div id="shop">
          <ShopSection isPreview={true} onViewMore={() => setCurrentPage('shop')} />
        </div>
        <div id="contact">
          <ContactSection />
        </div>

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    );
  }

  // 詳細ページ
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'about' && <AboutSection isPreview={false} />}
      {currentPage === 'news' && (
        <NewsSection isPreview={false} onArticleClick={openNewsArticle} />
      )}
      {currentPage === 'collection' && <IPSection isPreview={false} />}
      {currentPage === 'shop' && <ShopSection isPreview={false} />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
