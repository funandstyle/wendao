'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const sceneASteps = [
  { time: '07:00', title: '清晨唤醒', desc: '机器狗从充电底座起身，主动走向老人的卧室，轻声提醒今日天气与日程。' },
  { time: '07:30', title: '出门准备', desc: '机器狗背上购物篮，在门口等待老人换好鞋，自动开启跟随模式。' },
  { time: '08:00', title: '菜市场随行', desc: '穿行在人流中，实时避障，保持安全距离。遇到熟人时自动减速等待。' },
  { time: '08:45', title: '满载而归', desc: '购物篮装满，机器狗稳稳背负，始终保持在老人视野范围内，确保安全回家。' },
]

const sceneBSteps = [
  { time: '14:00', title: '公园到达', desc: '机器狗扫描公园环境，标记安全区域（草地、步道）与禁区（水域、陡坡）。' },
  { time: '14:15', title: '互动游戏', desc: '孩子抛出飞盘，机器狗预判落点，跃起接球，四足灵活腾挪。' },
  { time: '14:45', title: '安全守护', desc: '孩子跑向湖边，机器狗立即加速拦截，挡在孩子与水域之间，发出温和提醒。' },
  { time: '15:30', title: '疲惫归途', desc: '孩子走累了，机器狗降低高度让孩子扶坐，缓缓护送回家。' },
]

function SceneTimeline({ title, subtitle, steps, gradient }: {
  title: string
  subtitle: string
  steps: typeof sceneASteps
  gradient: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])

  return (
    <section ref={ref} className={`py-24 md:py-32 px-6 md:px-12 ${gradient}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">{subtitle}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{title}</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-[#e07800] to-[#4ecdc4] origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const itemRef = useRef(null)
              const itemInView = useInView(itemRef, { once: true, margin: '0px 0px -80px 0px' })
              return (
                <motion.div
                  key={i}
                  ref={itemRef}
                  initial={{ opacity: 0, x: -30 }}
                  animate={itemInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-[#0d1426] border-2 border-[#e07800] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#e07800]" />
                  </div>
                  <div className="text-xs font-bold text-[#e07800] mb-1">{step.time}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{step.title}</h3>
                  <p className="text-[#a89f91] leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ScenesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">Immersive Experience</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              一天的故事
            </h1>
            <p className="text-lg text-[#a89f91] max-w-2xl mx-auto">
              随滚动体验机器狗陪伴老人买菜、陪伴儿童公园玩耍的完整一天
            </p>
          </motion.div>
        </section>

        <SceneTimeline
          title="陪伴老人早晨买菜"
          subtitle="Scene A"
          steps={sceneASteps}
          gradient="bg-gradient-to-b from-transparent via-amber-950/10 to-transparent"
        />

        <SceneTimeline
          title="陪伴儿童公园玩耍"
          subtitle="Scene B"
          steps={sceneBSteps}
          gradient="bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent"
        />
      </main>
      <Footer />
    </>
  )
}
