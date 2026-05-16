import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ShopSectionProps {
  isPreview?: boolean;
  onViewMore?: () => void;
}

export function ShopSection({ isPreview = false, onViewMore }: ShopSectionProps) {
  const featuredProducts = [
    {
      id: 1,
      name: 'メモリーズ - musiqman Jr. × 永井博',
      category: 'Vinyl Record',
      description: 'イラストレーター・永井博氏とのコラボレーションレコード。永井氏による描き下ろしジャケットと、musiqman Jr.の音楽が融合した特別なアイテム。',
      image: 'https://images.unsplash.com/photo-1762704452358-1a65ea252529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvbGxlY3Rpb24lMjBzaGVsZnxlbnwxfHx8fDE3NzE4ODYzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'bANq Original Merchandise',
      category: 'Apparel & Accessories',
      description: 'bANqのコンセプトを体現したオリジナルグッズ。Tシャツ、トートバッグなど、洗練されたデザインのアイテムを取り揃えています。',
      image: 'https://images.unsplash.com/photo-1629539486472-b6853f116c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBjYXNlJTIwYW1wbGlmaWVyJTIwY2FzZXN8ZW58MXx8fHwxNzcxOTQ0MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-32 md:py-40 px-8 lg:px-16 bg-gradient-to-br from-white via-gray-50/40 to-purple-50/25 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-blue-50/20 via-transparent to-purple-50/20"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 55, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-24 max-w-[1200px] mx-auto text-center"
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
              Official Store
            </motion.span>
            <motion.div 
              className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-2"
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
            Shop
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            bANqのコンセプトを体現したオリジナルグッズやコラボレーション商品をオンラインストアでご購入いただけます。
          </motion.p>
        </motion.div>
        
        {/* Featured Products Preview */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-[1200px] mx-auto mb-20">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div 
                className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 mb-6 overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated Frame */}
                <motion.div
                  className="absolute inset-0 border-4 rounded-2xl"
                  initial={{ borderColor: "rgba(255,255,255,0)" }}
                  whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-xs text-gray-400 tracking-wider uppercase font-light">
                  {product.category}
                </div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-light tracking-tight leading-tight"
                  whileHover={{ x: 5, color: "#666" }}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h3>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  {product.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Shopify Store */}
        <motion.div 
          className="max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black p-16 md:p-20 text-center shadow-2xl"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated Background Pattern */}
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
              style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                backgroundSize: "200% 200%",
              }}
            />

            <div className="relative z-10">
              <motion.div
                className="w-20 h-1 bg-white/30 mx-auto mb-8 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.h2 
                className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Visit Our Online Store
              </motion.h2>
              <motion.p 
                className="text-xl font-light text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                オリジナル商品の詳細や最新のコレクションは、<br className="hidden md:inline" />
                オンラインストアでご覧いただけます
              </motion.p>
              <motion.a 
                href="https://banq-shop.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black text-[15px] font-medium tracking-wider rounded-full shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span>Shop on Shopify</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
              
              <motion.p 
                className="text-sm font-light text-white/50 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                ご購入に関するお問い合わせは、Contactページよりご連絡ください
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}