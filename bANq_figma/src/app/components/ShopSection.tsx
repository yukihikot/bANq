import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import banquestImg from '../../assets/other/nagai-collab.jpg';

interface ShopSectionProps {
  isPreview?: boolean;
  onViewMore?: () => void;
}

export function ShopSection({ isPreview = false, onViewMore }: ShopSectionProps) {
  const featuredProducts = [
    {
      id: 1,
      name: 'BANQUE(S)T - musiqman Jr. × 永井博',
      category: 'Vinyl Record',
      description: 'musiqman Jr.とイラストレーター・永井博氏とのコラボレーションレコード。R&B, Soul, AOR の名曲を再構築したカバーアルバム。限定生産盤。',
      image: banquestImg,
    },
    {
      id: 2,
      name: 'bANq Original Merchandise',
      category: 'Coming Soon',
      description: 'bANqオリジナルグッズは現在準備中です。公開までしばらくお待ちください。',
      image: 'https://images.unsplash.com/photo-1629539486472-b6853f116c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBjYXNlJTIwYW1wbGlmaWVyJTIwY2FzZXN8ZW58MXx8fHwxNzcxOTQ0MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: '準備中',
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
            Artifacts / Shop
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            bANqのプロジェクトから生まれたレコードやアートワーク、オリジナルプロダクトをご紹介します。
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
                {product.status && (
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs tracking-wider text-gray-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    {product.status}
                  </div>
                )}
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
                Take a Piece of the Project.
              </motion.h2>
              <motion.p
                className="text-xl font-light text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                プロジェクトの一部を、あなたの日常へ
              </motion.p>
              <motion.div
                className="inline-flex items-center gap-3 px-12 py-5 bg-white/10 text-white text-[15px] font-medium tracking-wider rounded-full border border-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="w-2 h-2 rounded-full bg-white/60" />
                <span>Coming Soon / 準備中</span>
              </motion.div>

              <motion.p
                className="text-sm font-light text-white/50 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                オンラインストアは現在準備中です。お問い合わせは Contact よりご連絡ください
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
