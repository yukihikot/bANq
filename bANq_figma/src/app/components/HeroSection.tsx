import { motion } from 'motion/react';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    setActiveSection('ip');
    scrollToTop();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.08, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-500/40 to-blue-500/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="bANq Cultural Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/15 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-8 pt-24 max-w-5xl mx-auto">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center items-center"
          >
            <h1 className="text-white text-7xl md:text-9xl font-light tracking-wider">
              bANq
            </h1>
          </motion.div>
          
          <motion.h2 
            className="text-white/90 text-2xl md:text-3xl tracking-wide font-light mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Understanding Value.
          </motion.h2>
          
          <motion.p 
            className="text-white/70 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            価値は、今この瞬間の積み重ねによって生まれます。守り、関わり、継続することで、信用となり価値へと姿を変えていきます。<br />
            bANqはIP(知的財産)とCP(文化資産)を保護・運用・育成し、その価値を社会と分かち合うための窓口です。
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.button
              onClick={handleExploreClick}
              className="group relative px-10 py-5 text-white text-[15px] font-medium tracking-wider overflow-hidden rounded-full border-2 border-white/30 hover:border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Collection</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 backdrop-blur-sm"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => { setActiveSection('about'); scrollToTop(); }}
              className="px-10 py-5 text-white/80 text-[15px] font-medium tracking-wider hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}