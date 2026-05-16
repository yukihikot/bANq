import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CollectionSectionProps {
  isPreview?: boolean;
  onViewMore?: () => void;
}

export function CollectionSection({ isPreview = false, onViewMore }: CollectionSectionProps) {
  const [activeTab, setActiveTab] = useState<'ip' | 'cp' | 'journal'>('ip');

  const tabs = [
    { id: 'ip', label: 'IP' },
    { id: 'cp', label: 'CP' },
    { id: 'journal', label: 'Journal' },
  ];

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

  const cpContent = [
    {
      id: 1,
      title: 'Guitar App',
      description: 'AIを活用したギター評価・鑑定アプリケーション。ギターの価値を客観的に分析し、コレクターと愛好家をサポートする革新的なツールを開発中です。',
      image: 'https://images.unsplash.com/photo-1761596993052-1a5991a52c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZ3VpdGFyJTIwd29vZCUyMGdyYWluJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzE5NDQxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: '鋭意作成中',
    },
    {
      id: 2,
      title: 'Guitar Asset Care',
      description: '文化財級のギターの保護と運用をサポートするサービス。専門知識と最新テクノロジーを組み合わせた、包括的な資産管理を提供します。',
      image: 'https://images.unsplash.com/photo-1696245843980-79b69e076ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBhY291c3RpYyUyMGd1aXRhcnMlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcxOTQ0MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'サービス提供中',
    },
    {
      id: 3,
      title: 'Guitar Growth Program',
      description: 'ギターの育成と価値の観測プログラム。時間とともに変化する楽器の特性を記録し、その成長プロセスをドキュメント化します。最初のサンプルとして、4本のMartin Guitarの観測を実施中。',
      image: 'https://images.unsplash.com/photo-1660006417074-91711e3ff86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGd1aXRhciUyMHdvcmtzaG9wJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3NzE5NDQxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: '観測中',
    },
  ];

  const journalContent = [
    {
      id: 1,
      title: '服部コラム：ギターの育て方',
      description: '1000本以上のギターを弾いてきた経験から、ギターの適切な管理方法、音色の育成、そして楽器との向き合い方について語ります。',
      image: 'https://images.unsplash.com/photo-1696245843980-79b69e076ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBhY291c3RpYyUyMGd1aXRhcnMlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcxOTQ0MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'コラム',
    },
    {
      id: 2,
      title: '1000本のギターを弾いてきて',
      description: '長年にわたるギターコレクションと演奏の経験から見えてきた、楽器の本質的な価値と、それを次世代へ継承する意義について考察します。',
      image: 'https://images.unsplash.com/photo-1762704452358-1a65ea252529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvbGxlY3Rpb24lMjBzaGVsZnxlbnwxfHx8fDE3NzE4ODYzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'エッセイ',
    },
    {
      id: 3,
      title: 'ヴィンテージギターの真実',
      description: 'ヴィンテージギターの評価基準、市場動向、そして本当に価値のある楽器を見極めるためのポイントを、専門家の視点から解説します。',
      image: 'https://images.unsplash.com/photo-1629539486472-b6853f116c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBjYXNlJTIwYW1wbGlmaWVyJTIwY2FzZXN8ZW58MXx8fHwxNzcxOTQ0MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ガイド',
    },
  ];

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'ip':
        return ipContent;
      case 'cp':
        return cpContent;
      case 'journal':
        return journalContent;
      default:
        return ipContent;
    }
  };

  const displayItems = isPreview ? getCurrentContent().slice(0, 2) : getCurrentContent();

  return (
    <section className="py-32 md:py-40 px-8 lg:px-16 bg-gradient-to-b from-gray-50/30 via-white to-blue-50/20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-purple-50/15 via-transparent to-blue-50/20"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 45, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-24 max-w-[1200px] mx-auto"
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
              Our Work
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
            Collection
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            bANqが取り組むIP（知的財産）、CP（文化資産）、そしてJournalを通じた情報発信をご紹介します。
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="mb-16 max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex gap-4 border-b border-gray-200">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'ip' | 'cp' | 'journal')}
                className={`px-8 py-4 text-lg font-light tracking-wide relative ${
                  activeTab === tab.id
                    ? 'text-black'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-[1200px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {displayItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div 
                  className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 mb-8 overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-8 text-white"
                    initial={{ y: 100, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-sm tracking-wider uppercase mb-2 opacity-80">View Details</div>
                    <motion.div 
                      className="w-12 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  </motion.div>

                  {/* Animated Frame */}
                  <motion.div
                    className="absolute inset-0 border-4 rounded-2xl"
                    initial={{ borderColor: "rgba(255,255,255,0)" }}
                    whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    {('status' in item) && (
                      <motion.span 
                        className="px-3 py-1 bg-black text-white text-xs tracking-wider uppercase rounded-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.status}
                      </motion.span>
                    )}
                    {('category' in item) && (
                      <motion.span 
                        className="px-3 py-1 bg-black text-white text-xs tracking-wider uppercase rounded-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.category}
                      </motion.span>
                    )}
                  </div>
                  <motion.h3 
                    className="text-2xl md:text-3xl font-light tracking-tight"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button for Preview Mode */}
        {isPreview && onViewMore && (
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.button 
              onClick={onViewMore}
              className="inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-black"
              whileHover={{ gap: 12 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>もっと見る</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}