import { motion } from 'motion/react';
import juniorImg from '../../assets/people/junior.jpg';
import sIchiroImg from '../../assets/people/s-ichiro.jpg';
import jNosukeImg from '../../assets/people/j-nosuke.jpg';

const custodians = [
  {
    image: jNosukeImg,
    name: 'S-ichiro',
    role: 'Strategic',
    field: 'Structure / Systems',
    description:
      'IP/CP の構造設計、戦略設計、運用システムを担当。文化資産を継続可能な形で社会へ接続するための基盤構築を行う。',
  },
  {
    image: sIchiroImg,
    name: 'J-nosuke',
    role: 'Creative',
    field: 'Music / Culture',
    description:
      '音楽・文化領域における実践知を軸に、IP と CP を横断。演奏・制作・運用・観測を通じて、文化と社会を接続する役割を担う。',
  },
];

export function PeopleSection() {
  return (
    <section
      id="people"
      className="relative py-32 bg-gradient-to-br from-white via-gray-50/40 to-white overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-gray-200/40 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/20 to-gray-200/30 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">People</h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            bANq を形づくる人々
          </p>
        </motion.div>

        {/* The Core */}
        <motion.div
          className="max-w-5xl mx-auto mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light mb-10 text-center">
            The Core
          </h3>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-50"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={juniorImg}
                alt="musiqman Jr."
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h4 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                musiqman Jr.
              </h4>
              <p className="text-sm tracking-wide text-gray-400 font-light mb-8">
                Origin of the bANq
              </p>
              <div className="space-y-5 text-base md:text-lg leading-relaxed font-light text-gray-700">
                <p>bANq の IP 思想における創造的源泉。</p>
                <p>
                  構想以前の段階からプロジェクトの核に関わり、音楽とアートの接続点を形成する存在。
                </p>
                <p>
                  永井博とのコラボレーションをはじめ、bANq の主要 IP においてコンセプト形成・プロデュース・表現を担う。
                </p>
                <p className="text-black font-medium">
                  bANq の内側を駆動させる Creative Core。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Custodians */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light mb-8 text-center">
            The Custodians
          </h3>
          <p className="max-w-3xl mx-auto text-center text-base md:text-lg leading-relaxed font-light text-gray-700 mb-16">
            思想を構造化し、IP および CP を受け止める器として bANq を設計。
            創造物を&ldquo;消費&rdquo;ではなく&ldquo;資産&rdquo;として扱うために、音楽・アート・文化・戦略・構造を横断しながら、継続可能な運用基盤を構築する。
          </p>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {custodians.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover grayscale"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h4 className="text-2xl font-medium tracking-tight mb-3">{person.name}</h4>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-xs tracking-wider uppercase">
                        {person.role}
                      </span>
                      <span className="text-sm text-gray-400 font-light tracking-wide">
                        {person.field}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {person.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
