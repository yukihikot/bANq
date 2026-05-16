import { motion } from 'motion/react';
import { newsArticles } from '../data/news';

interface NewsSectionProps {
  isPreview?: boolean;
  onViewMore?: () => void;
  onArticleClick?: (id: string) => void;
}

export function NewsSection({ isPreview = false, onViewMore, onArticleClick }: NewsSectionProps) {
  // プレビューモードでは最初の2つのニュースのみ表示
  const displayItems = isPreview ? newsArticles.slice(0, 2) : newsArticles;

  return (
    <section className="py-32 md:py-40 px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50/20 to-gray-50/30 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-bl from-gray-50/15 via-transparent to-blue-50/20"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 50, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-24 max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <motion.span 
              className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Latest Updates
            </motion.span>
            <motion.div 
              className="h-px w-full bg-gradient-to-r from-gray-300 to-transparent mt-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <motion.h1 
            className="text-5xl md:text-7xl font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            News
          </motion.h1>
        </motion.div>
        
        {/* News Items */}
        <div className="space-y-24 max-w-[1200px] mx-auto">
          {displayItems.map((item, index) => (
            <motion.article 
              key={item.id} 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}>
                {/* Image */}
                <motion.div
                  className={`${index % 2 === 0 ? '' : 'lg:col-start-2'} cursor-pointer`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => onArticleClick?.(item.id)}
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-xl">
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 border-2 rounded-2xl"
                      initial={{ borderColor: "rgba(0,0,0,0)" }}
                      whileHover={{ 
                        borderColor: "rgba(0,0,0,0.08)",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-4 text-sm">
                    <motion.span 
                      className="text-gray-400 tracking-wider font-light"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {item.date}
                    </motion.span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <motion.span 
                      className="px-4 py-1.5 bg-black text-white text-xs tracking-wider uppercase rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.category}
                    </motion.span>
                  </div>
                  
                  <motion.h2 
                    className="text-3xl md:text-4xl font-light tracking-tight leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {item.title}
                  </motion.h2>
                  
                  <motion.p
                    className="text-lg font-light leading-relaxed text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {item.excerpt}
                  </motion.p>

                  <motion.button
                    className="group/btn inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-black"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ gap: 12 }}
                    onClick={() => onArticleClick?.(item.id)}
                  >
                    <span>Read More</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </div>

              {/* Divider */}
              {index < displayItems.length - 1 && (
                <motion.div 
                  className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              )}
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        {isPreview && (
          <motion.button 
            className="mt-24 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            whileHover={{ gap: 12 }}
            onClick={onViewMore}
          >
            <span>もっと見る</span>
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        )}
      </div>
    </section>
  );
}