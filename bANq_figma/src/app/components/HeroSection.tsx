import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import recordShopImg from '../../assets/jackets/record-shop.jpg';
import snowMountainImg from '../../assets/jackets/snow-mountain.jpg';
import landscapeImg from '../../assets/jackets/landscape.jpg';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const slides = [
  { src: recordShopImg, alt: 'Record Shop' },
  { src: snowMountainImg, alt: 'Snow Mountain' },
  { src: landscapeImg, alt: 'Landscape' },
];

export function HeroSection({ setActiveSection: _setActiveSection }: HeroSectionProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Cross-fade slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        >
          <img
            src={slides[index].src}
            alt={slides[index].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75"></div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/15 rounded-full pointer-events-none"
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
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center"
          >
            <h1 className="text-white text-7xl md:text-9xl font-light tracking-wider drop-shadow-lg">
              bANq
            </h1>
          </motion.div>

          <motion.h2
            className="text-white/90 text-2xl md:text-3xl tracking-wide font-light mb-6 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Understanding Value.
          </motion.h2>

          <motion.p
            className="text-white/80 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            価値は、今この瞬間の積み重ねによって生まれます。守り、関わり、継続することで、信用となり価値へと姿を変えていきます。
            <br />
            bANq は IP（知的財産）と CP（文化資産）を保護・運用・育成し、その価値を社会と分かち合うための窓口です。
          </motion.p>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-10 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
