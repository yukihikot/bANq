import { motion } from 'motion/react';

interface CPSectionProps {
  onReadMore?: () => void;
}

export function CPSection({ onReadMore }: CPSectionProps = {}) {
  const cpContent = [
    {
      id: 1,
      title: 'Guitar App',
      description:
        'AIを活用したギター評価・鑑定アプリケーション。ギターの価値を客観的に分析し、コレクターと愛好家をサポートする革新的なツールを開発中です。',
      image:
        'https://images.unsplash.com/photo-1761596993052-1a5991a52c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZ3VpdGFyJTIwd29vZCUyMGdyYWluJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzE5NDQxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Guitar Asset Care',
      description:
        '文化財級のギターの保護と運用をサポートするサービス。専門知識と最新テクノロジーを組み合わせた、包括的な資産管理を提供します。',
      image:
        'https://images.unsplash.com/photo-1696245843980-79b69e076ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBhY291c3RpYyUyMGd1aXRhcnMlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcxOTQ0MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Guitar Growth Program',
      description:
        'ギターの育成と価値の観測プログラム。時間とともに変化する楽器の特性を記録し、その成長プロセスをドキュメント化します。最初のサンプルとして、4本のMartin Guitarの観測を実施中。',
      image:
        'https://images.unsplash.com/photo-1660006417074-91711e3ff86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGd1aXRhciUyMHdvcmtzaG9wJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3NzE5NDQxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="cp" className="relative py-32 bg-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
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
              CP &amp; Asset Stewardship
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Stewardship = Protecting × Growing（守る × 育てる）
            </p>
          </motion.div>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-lg leading-relaxed font-light text-gray-700">
            ギターを「完成した物」としてではなく、時間の中で育つ文化資産として扱うための取り組みです。
          </p>

          {onReadMore && (
            <motion.button
              onClick={onReadMore}
              className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-black"
              whileHover={{ gap: 12 }}
            >
              <span>Read More</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {cpContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group h-full"
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
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-medium mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
