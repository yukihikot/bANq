import { motion } from 'motion/react';

interface AboutSectionProps {
  isPreview?: boolean;
  onViewMore?: () => void;
}

export function AboutSection(_props: AboutSectionProps = {}) {
  return (
    <section className="py-32 md:py-40 px-8 lg:px-16 bg-gradient-to-b from-white via-blue-50/15 to-purple-50/20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/15"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
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
              About Us
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
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            About <motion.span 
              className="font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              bANq
            </motion.span>
          </motion.h1>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Main Text */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <motion.div 
              className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1767486463522-372ed9287c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnNldCUyMHNpbGhvdWV0dGUlMjBjb250ZW1wbGF0aXZlfGVufDF8fHx8MTc3MTk0NDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Understanding Value"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>

            <div className="prose prose-lg">
              <motion.p 
                className="text-xl md:text-2xl font-light leading-relaxed text-gray-800 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                bANqは、Intellectual Property(知的財産)とCultural Property(文化資産)を対象に、管理・運用・育成を行うプロジェクトです。
              </motion.p>
              
              <motion.p 
                className="text-lg font-light leading-relaxed text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                楽曲やアート・デザインといったIP、そしてヴィンテージを含むアコースティックギターを中心としたCPを、時間と関与によって価値が育つ資産として扱い、評価、プロダクト開発、テクノロジーの活用までを一貫して行っています。
              </motion.p>

              <motion.p 
                className="text-lg font-light leading-relaxed text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                また、アコースティックギターの評価・AIアプリ開発、コミュニティやアナログイベントの企画・運営など、文化が継続するための仕組みづくりも行っています。
              </motion.p>
            </div>

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="p-10 md:p-12 bg-white rounded-2xl shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <motion.div
                    className="w-16 h-1 bg-black rounded-full mb-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Our Philosophy</h2>
                </div>
                <p className="text-xl font-light leading-relaxed text-gray-800 mb-6">
                  Stewardship（スチュワードシップ）とは、価値あるものを「所有」するのではなく、一時的に託され、守り、育て、次の時代へ引き渡す責任を引き受ける姿勢を指します。
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-600 mb-4">
                  bANqが扱うIP（知的財産）やCP（文化資産）は、時間と関与によって価値が変化する存在です。私たちはそれらを消費や投機の対象としてではなく、継続と信頼によって育つ資産として管理・運用・育成します。
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-600">
                  bANqは、文化と社会をつなぐ価値の窓口として、託されたものを未来へ手渡す役割を担います。
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Mission Statement */}
          <div className="lg:sticky lg:top-32">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 rounded-3xl -z-10"
                animate={{ 
                  rotate: [0, 3, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="p-10 md:p-12 bg-white rounded-2xl shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <motion.div 
                    className="w-16 h-1 bg-black rounded-full mb-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Our Mission</h2>
                </div>
                <p className="text-xl font-light leading-relaxed text-gray-800 mb-6">
                  私たちの使命は、価値を消費するのではなく、守り、育て、次の時代へと手渡すことです。
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-600 italic mb-4">
                  Our mission is not to consume value, but to steward it and carry it forward.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}