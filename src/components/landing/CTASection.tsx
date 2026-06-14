'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail('')
    }
  }

  return (
    <section className="px-6 md:px-12 py-24 md:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center bg-[#0d1426] border border-[var(--border-subtle)] rounded-3xl p-12 md:p-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          加入等待列表
        </h2>
        <p className="text-lg text-[#a89f91] mb-10 max-w-lg mx-auto">
          第一时间认识你的 AI 伙伴，获取产品最新动态与首发优惠
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="输入你的邮箱"
            className="flex-1 px-6 py-4 bg-[#141f3a] border border-[var(--border-subtle)] rounded-xl text-[#f0e6d3] placeholder-[#6b7a99] focus:outline-none focus:border-[#e07800] transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-[#e07800] to-[#c46a00] text-white font-bold rounded-xl hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(224,120,0,0.3)] flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                已提交
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                立即预约
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  )
}
