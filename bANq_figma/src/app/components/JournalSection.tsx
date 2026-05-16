import { motion } from 'motion/react';
import { journalArticles } from '../data/journal';

interface JournalSectionProps {
  onArticleClick?: (id: string) => void;
}

export function JournalSection({ onArticleClick }: JournalSectionProps = {}) {
  const journalContent = journalArticles;

  return (
    <section id="journal" className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 to-green-200/30 rounded-full blur-3xl"></div>
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
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">Journal</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              知見と洞察の共有
            </p>
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {journalContent.map((item, index) => (
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
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-medium mb-4 group-hover:text-green-600 transition-colors duration-300">
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
