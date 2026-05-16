import { motion } from 'motion/react';
import { ipProjects } from '../data/projects';

interface IPSectionProps {
  isPreview?: boolean;
  onReadMore?: () => void;
}

export function IPSection({ onReadMore }: IPSectionProps = {}) {
  return (
    <section
      id="ip"
      className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-gray-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
              IP &amp; Creative Project
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              音楽、アート・デザインの交差点における創造
            </p>
          </motion.div>
        </motion.div>

        {/* Concept */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light mb-6">
            Concept
          </h3>
          <p className="text-base md:text-lg leading-relaxed font-light text-gray-700">
            bANq は、IP（知的財産）を単なる制作物ではなく、どのように届け、どのように残り、どのように展開されるか、その全体を設計・運用します。音楽 IP を起点に、複数の領域と接続可能な IP として運用します。
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed font-light text-gray-700">
            IP の価値は、それ単体で完結するものではなく、どのような関係の中に置かれるかによって定義され、その意味と価値が更新されていきます。
          </p>

          {onReadMore && (
            <motion.button
              onClick={onReadMore}
              className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-black"
              whileHover={{ gap: 12 }}
            >
              <span>Read More</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          )}
        </motion.div>

        {/* Projects Grid (4 boxes: 1 collab + 3 albums) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {ipProjects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {item.badge && (
                    <motion.div
                      className="absolute top-4 right-4 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium tracking-wider uppercase text-gray-800"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {item.badge}
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light whitespace-pre-wrap">
                    {item.description}
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
