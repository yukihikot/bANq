import { motion } from 'motion/react';
import type { Article, ArticleBlock } from '../data/types';

export type ArticleKind = 'news' | 'journal' | 'ip' | 'cp';

interface ArticleDetailProps {
  article: Article;
  kind: ArticleKind;
  onBack: () => void;
}

const backLabel: Record<ArticleKind, string> = {
  news: 'News 一覧へ戻る',
  journal: 'Journal 一覧へ戻る',
  ip: 'IP セクションへ戻る',
  cp: 'CP セクションへ戻る',
};

function renderBlock(block: ArticleBlock, idx: number) {
  switch (block.type) {
    case 'heading': {
      const level = block.level ?? 2;
      const className =
        level === 2
          ? 'text-xl md:text-2xl font-medium tracking-wide text-center mt-14 mb-8'
          : 'text-lg md:text-xl font-medium tracking-tight mt-10 mb-5';
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
              ? 'text-lg md:text-xl font-medium text-black my-6'
              : 'text-base md:text-lg text-gray-700 my-4'
          }`}
        >
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul
          key={idx}
          className="my-6 space-y-3 list-disc list-inside text-base md:text-lg text-gray-700 font-light"
        >
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
          className="my-8 border-l-2 border-gray-800 pl-5 py-1 text-base md:text-lg font-medium tracking-wide"
        >
          {block.text}
        </div>
      );
    case 'divider':
      return (
        <hr
          key={idx}
          className="my-10 border-0 border-t border-gray-200 max-w-[80px] mx-auto"
        />
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
    case 'table':
      return (
        <div key={idx} className="my-10 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="text-left px-4 py-3 text-sm md:text-base font-medium tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-200">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 text-sm md:text-base font-light text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>{backLabel[kind]}</span>
        </motion.button>

        {/* Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {(article.date || article.category) && (
            <div className="flex items-center gap-4 text-sm mb-6">
              {article.date && (
                <span className="text-gray-400 tracking-wider font-light">{article.date}</span>
              )}
              {article.date && article.category && (
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              )}
              {article.category && (
                <span className="px-4 py-1.5 bg-black text-white text-xs tracking-wider uppercase rounded-full">
                  {article.category}
                </span>
              )}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-4 text-lg md:text-xl font-light text-gray-600">
              {article.subtitle}
            </p>
          )}
        </motion.header>

        {/* Hero image (only if provided) */}
        {article.image && (
          <motion.div
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-16 bg-gradient-to-br from-gray-100 to-gray-50"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </motion.div>
        )}

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>{backLabel[kind]}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
