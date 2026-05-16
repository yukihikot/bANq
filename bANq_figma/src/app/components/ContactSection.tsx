import { useState } from 'react';
import { motion } from 'motion/react';

const RECIPIENT_EMAILS = ['shinichirobaba@thebanq.co.jp', 'h.junno@thebanq.co.jp'];

const subjectLabels: Record<string, string> = {
  consignment: '委託管理の相談',
  collaboration: 'IP / CP コラボ',
  press: '取材・問い合わせ',
  product: '商品について',
  other: 'その他',
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLabel = subjectLabels[formData.subject] ?? 'お問い合わせ';
    const subject = `[bANq Contact] ${subjectLabel}`;
    const body = [
      `お名前: ${formData.name}`,
      `メールアドレス: ${formData.email}`,
      `件名: ${subjectLabel}`,
      '',
      'お問い合わせ内容:',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:${RECIPIENT_EMAILS.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="py-32 md:py-40 px-8 lg:px-16 bg-gradient-to-b from-white via-purple-50/10 to-gray-50/30 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-blue-50/10 via-transparent to-purple-50/15"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light">
              Get In Touch
            </span>
            <div className="h-px w-full bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">Contact</h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl leading-relaxed">
            委託管理のご相談、IP/CPコラボレーション、取材・お問い合わせなど、
            <br className="hidden md:inline" />
            以下のフォームよりお気軽にご連絡ください。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused === 'name' || formData.name
                      ? '-top-6 text-sm text-gray-600'
                      : 'top-4 text-base text-gray-400'
                  }`}
                >
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('name')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-black outline-none transition-colors duration-300 font-light"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused === 'email' || formData.email
                      ? '-top-6 text-sm text-gray-600'
                      : 'top-4 text-base text-gray-400'
                  }`}
                >
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-black outline-none transition-colors duration-300 font-light"
                />
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused === 'subject' || formData.subject
                      ? '-top-6 text-sm text-gray-600'
                      : 'top-4 text-base text-gray-400'
                  }`}
                >
                  件名 <span className="text-red-400">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('subject')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-black outline-none transition-colors duration-300 appearance-none font-light cursor-pointer"
                >
                  <option value=""></option>
                  <option value="consignment">委託管理の相談</option>
                  <option value="collaboration">IP / CP コラボ</option>
                  <option value="press">取材・問い合わせ</option>
                  <option value="product">商品について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative pt-6">
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused === 'message' || formData.message
                      ? '-top-0 text-sm text-gray-600'
                      : 'top-10 text-base text-gray-400'
                  }`}
                >
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('message')}
                  onBlur={() => setIsFocused(null)}
                  required
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-black outline-none transition-colors duration-300 resize-none font-light"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative w-full py-5 bg-black text-white text-[15px] font-medium tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10">送信する</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
                <p className="mt-4 text-xs text-gray-400 font-light text-center">
                  送信ボタンを押すと、お使いのメールクライアントが起動します。
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Contact Details */}
              <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-medium mb-6 tracking-wide">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1 font-light">Address</div>
                      <div className="font-light leading-relaxed">
                        〒104-0061
                        <br />
                        東京都中央区銀座1丁目12番4号
                        <br />
                        N&amp;E BLD. 6F
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl shadow-xl">
                <h3 className="text-xl font-medium mb-6 tracking-wide">Follow Us</h3>
                <motion.a
                  href="https://www.instagram.com/banq.llc/?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-1 font-light">Instagram</div>
                    <div className="font-light group-hover:text-white/90 transition-colors duration-300">
                      @banq.llc
                    </div>
                  </div>
                  <motion.svg
                    className="w-5 h-5 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ x: 5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
