import { motion } from 'motion/react';
import type { Article, ArticleBlock } from '../data/types';

interface ArticleDetailProps {
  article: Article;
  kind: 'news' | 'journal';
  onBack: () => void;
}

function renderBlock(block: ArticleBlock, idx: number) {
  switch (block.type) {
    case 'heading': {
      const level = block.level ?? 2;
      const className =
        level === 2
          ? 'text-2xl md:text-3xl font-light tracking-wide text-center mt-16 mb-10'
          : 'text-xl md:text-2xl font-medium tracking-tight mt-12 mb-6';
      return (
        <h3 key={idx} className={className}>
          {block.text}
        </h3>
      );
    }
    case 'paragraph':
      return (
        <p
          key={idx}
          className={`leading-relaxed font-light whitespace-pre-wrap ${
            block.emphasis
              ? 'text-xl md:text-2xl font-medium text-black my-8'
              : 'text-base md:text-lg text-gray-700 my-4'
          }`}
        >
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={idx} className="my-6 space-y-3 list-disc list-inside text-base md:text-lg text-gray-700 font-light">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div
          key={idx}
          className="my-10 border-l-2 border-black pl-6 py-2 text-lg md:text-xl font-medium tracking-wide"
        >
          ■ {block.text}
        </div>
      );
    case 'divider':
      return (
        <div key={idx} className="flex justify-center my-10 text-gray-400 tracking-widest text-sm">
          ↓↓↓
        </div>
      );
    case 'note':
      return (
        <p
          key={idx}
          className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500 font-light"
        >
          ※ {block.text}
        </p>
      );
    default:
      return null;
  }
}

export function ArticleDetail({ article, kind, onBack }: ArticleDetailProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-32 px-6 md:px-8 lg:px-16 bg-gradient-to-br from-white via-gray-50/30 to-white">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-500 hover:text-black mb-12"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ gap: 12 }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>{kind === 'news' ? 'News 一覧へ戻る' : 'Journal 一覧へ戻る'}</span>
        </motion.button>

        {/* Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-sm mb-6">
            <span className="text-gray-400 tracking-wider font-light">{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="px-4 py-1.5 bg-black text-white text-xs tracking-wider uppercase rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            {article.title}
          </h1>
        </motion.header>

        {/* Hero image */}
        <motion.div
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-16 bg-gradient-to-br from-gray-100 to-gray-50"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Body */}
        <motion.div
          className="prose-bANq"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {article.body.map((block, idx) => renderBlock(block, idx))}
        </motion.div>

        {/* Footer back */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-black hover:gap-3 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{kind === 'news' ? 'News 一覧へ戻る' : 'Journal 一覧へ戻る'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
