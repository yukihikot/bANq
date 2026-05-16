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
import { ipDetailArticle, cpDetailArticle } from './data/sections';

export type Page =
  | 'home'
  | 'about'
  | 'news'
  | 'collection'
  | 'shop'
  | 'news-detail'
  | 'journal-detail'
  | 'ip-detail'
  | 'cp-detail';

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

  const openIPDetail = () => {
    setCurrentPage('ip-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openCPDetail = () => {
    setCurrentPage('cp-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeArticle = () => {
    const from = currentPage;
    setSelectedArticleId(null);
    setCurrentPage('home');

    let scrollTargetId: string | null = null;
    if (from === 'news-detail') scrollTargetId = 'news';
    else if (from === 'journal-detail') scrollTargetId = 'journal';
    else if (from === 'ip-detail') scrollTargetId = 'ip';
    else if (from === 'cp-detail') scrollTargetId = 'cp';

    setTimeout(() => {
      if (scrollTargetId) {
        const el = document.getElementById(scrollTargetId);
        if (el) {
          const offsetTop = el.offsetTop - 96;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    }, 50);
  };

  // 記事詳細ページ (News)
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

  // 記事詳細ページ (Journal)
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

  // セクション詳細ページ (IP)
  if (currentPage === 'ip-detail') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <ArticleDetail article={ipDetailArticle} kind="ip" onBack={closeArticle} />
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    );
  }

  // セクション詳細ページ (CP)
  if (currentPage === 'cp-detail') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <ArticleDetail article={cpDetailArticle} kind="cp" onBack={closeArticle} />
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    );
  }

  // ホームページの場合は全セクションを表示
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <HeroSection setActiveSection={handleSetActiveSection} />
        <div id="about">
          <AboutSection />
        </div>
        <div id="news">
          <NewsSection onArticleClick={openNewsArticle} />
        </div>
        <div id="ip">
          <IPSection onReadMore={openIPDetail} />
        </div>
        <div id="cp">
          <CPSection onReadMore={openCPDetail} />
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

  // その他の詳細ページ（about/news/collection/shop の単独ページ）
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'about' && <AboutSection />}
      {currentPage === 'news' && <NewsSection onArticleClick={openNewsArticle} />}
      {currentPage === 'collection' && <IPSection onReadMore={openIPDetail} />}
      {currentPage === 'shop' && <ShopSection isPreview={false} />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
