import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: 'home' | 'about' | 'news' | 'collection' | 'shop') => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'news', label: 'News' },
    { id: 'ip', label: 'IP' },
    { id: 'cp', label: 'CP' },
    { id: 'journal', label: 'Journal' },
    { id: 'shop', label: 'Shop' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    // ホームページでない場合は、まずホームに戻る
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // ホームに戻った後、少し待ってからスクロール
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 96; // ナビゲーション高さを考慮
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // すでにホームページにいる場合は、直接スクロール
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 96; // ナビゲーションの高さを考慮
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl shadow-xl' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.button 
            onClick={handleLogoClick}
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="h-10 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl font-light tracking-wider text-black">bANq</span>
            </motion.div>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-[15px] font-medium tracking-wide transition-all duration-300 group ${
                  currentPage === item.id ? 'text-black' : 'text-gray-500 hover:text-gray-900'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: currentPage === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-1 border-t border-gray-100">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-4 px-4 rounded-lg text-[15px] font-medium tracking-wide transition-all ${
                  currentPage === item.id 
                    ? 'text-black bg-gray-50' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}