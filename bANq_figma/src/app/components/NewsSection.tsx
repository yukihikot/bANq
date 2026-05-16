import { motion } from 'motion/react';
import { newsArticles } from '../data/news';

interface NewsSectionProps {
  isPreview?: boolean;
  onViewMore?: () => void;
  onArticleClick?: (id: string) => void;
}

export function NewsSection({ onArticleClick }: NewsSectionProps = {}) {
  const items = newsArticles;

  return (
    <section className="relative py-32 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-gray-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">News</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Latest Updates
            </p>
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group h-full"
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
                whileHover={{ y: -8 }}
                onClick={() => onArticleClick?.(item.id)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  {item.category && (
                    <motion.div
                      className="absolute top-4 right-4 px-4 py-1.5 bg-black text-white text-xs tracking-wider uppercase rounded-full"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {item.category}
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {item.date && (
                    <div className="text-sm text-gray-400 tracking-wider font-light mb-3">
                      {item.date}
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-medium mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {item.excerpt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
