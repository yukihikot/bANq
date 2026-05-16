import { useEffect, useState } from 'react';
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

const detailPageToSectionId: Partial<Record<Page, string>> = {
  'news-detail': 'news',
  'journal-detail': 'journal',
  'ip-detail': 'ip',
  'cp-detail': 'cp',
};

const scrollToSection = (sectionId: string) => {
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offsetTop = el.offsetTop - 96;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }, 50);
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // ブラウザの戻る/進むに対応
  useEffect(() => {
    // 初期 history state を設定（タブを開いた直後はnullなのでhome扱いに）
    if (window.history.state === null) {
      window.history.replaceState({ page: 'home', articleId: null }, '');
    }

    const handlePopState = (e: PopStateEvent) => {
      const state = e.state as { page: Page; articleId: string | null } | null;
      const newPage: Page = state?.page ?? 'home';
      const newArticleId = state?.articleId ?? null;

      setCurrentPage((prevPage) => {
        // 詳細ページから home に戻る場合、元のセクションへスクロール
        if (newPage === 'home') {
          const sectionId = detailPageToSectionId[prevPage];
          if (sectionId) scrollToSection(sectionId);
          else window.scrollTo({ top: 0, behavior: 'auto' });
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
        return newPage;
      });
      setSelectedArticleId(newArticleId);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 詳細ページへの遷移時に history に積む共通ヘルパー
  const pushHistory = (page: Page, articleId: string | null = null) => {
    window.history.pushState({ page, articleId }, '');
  };

  const handleSetActiveSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openNewsArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentPage('news-detail');
    pushHistory('news-detail', id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openJournalArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentPage('journal-detail');
    pushHistory('journal-detail', id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openIPDetail = () => {
    setCurrentPage('ip-detail');
    pushHistory('ip-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openCPDetail = () => {
    setCurrentPage('cp-detail');
    pushHistory('cp-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // 「一覧へ戻る」ボタン: ブラウザの戻ると同じ挙動にする
  const closeArticle = () => {
    window.history.back();
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
