import { motion } from 'motion/react';

export function IPSection() {
  const ipContent = [
    {
      id: 1,
      title: '永井博氏とのコラボレーション',
      description: '世界的に著名なイラストレーター・永井博氏とのコラボレーション。永井氏の象徴的なビジュアルと音楽を融合させた、新しい文化体験を創造します。',
      image: 'https://images.unsplash.com/photo-1728462989029-97cc21571d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjB0aWx0JTIwc2hpZnR8ZW58MXx8fHwxNzcxOTQ0MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: '進行中',
    },
    {
      id: 2,
      title: '音楽 × デザイン プロジェクト',
      description: '音楽とビジュアルデザインの境界を越えた、革新的なクリエイティブプロジェクト。アーティストとデザイナーの協働により、新しい表現の可能性を探ります。',
      image: 'https://images.unsplash.com/photo-1762704452358-1a65ea252529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvbGxlY3Rpb24lMjBzaGVsZnxlbnwxfHx8fDE3NzE4ODYzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: '検討中',
    },
    {
      id: 3,
      title: '作品制作 / イベント / プロダクト',
      description: 'IP（知的財産）を活用した、作品制作、文化イベントの企画、オリジナルプロダクトの開発など、多角的な展開を計画しています。',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      status: '検討中',
    },
  ];

  return (
    <section id="ip" className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">IP</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              知的財産の管理・運用・育成
            </p>
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {ipContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
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
                  
                  {/* Status Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.status}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
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
