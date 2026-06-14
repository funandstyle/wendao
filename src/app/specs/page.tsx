'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { specs } from '@/data/content'

const hotspots = [
  { id: 'camera', label: '双目相机', x: 45, y: 25, color: '#4ecdc4' },
  { id: 'motor', label: '伺服电机 x12', x: 25, y: 55, color: '#e07800' },
  { id: 'battery', label: '锂电池 8000mAh', x: 65, y: 55, color: '#4ecdc4' },
  { id: 'compute', label: 'Jetson Orin NX', x: 50, y: 40, color: '#e07800' },
  { id: 'lidar', label: '激光雷达', x: 50, y: 15, color: '#4ecdc4' },
  { id: 'imu', label: 'IMU 传感器', x: 50, y: 70, color: '#e07800' },
]

export default function SpecsPage() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null)

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">Specifications</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              产品规格
            </h1>
            <p className="text-lg text-[#a89f91] max-w-2xl mx-auto">
              点击模型上的热点，查看各模块的详细技术参数
            </p>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#0d1426] border border-[var(--border-subtle)] rounded-3xl p-8 aspect-square flex items-center justify-center"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-sm">
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M140 180 Q120 160 130 130 Q140 100 170 95 L230 95 Q260 100 270 130 Q280 160 260 180 L240 220 Q230 240 200 245 Q170 240 160 220 Z" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M170 95 L160 60 Q155 40 175 35 L225 35 Q245 40 240 60 L230 95" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M165 45 L150 20 Q145 10 155 15 L170 35" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M235 45 L250 20 Q255 10 245 15 L230 35" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M150 220 L140 290 Q135 310 150 315 L160 310 Q165 300 160 280 L165 230" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M180 235 L175 300 Q170 320 185 325 L195 320 Q200 310 195 290 L195 240" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M220 235 L225 300 Q230 320 215 325 L205 320 Q200 310 205 290 L205 240" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M250 220 L260 290 Q265 310 250 315 L240 310 Q235 300 240 280 L235 230" />
                <path className="fill-[#141f3a] stroke-[#e07800] stroke-[1.5]" d="M260 180 Q290 170 300 150 Q310 130 305 120" />
                <ellipse className="fill-[#e07800]" cx="185" cy="70" rx="8" ry="6" />
                <ellipse className="fill-[#e07800]" cx="215" cy="70" rx="8" ry="6" />
              </svg>

              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(activeSpot === spot.id ? null : spot.id)}
                  className="absolute w-4 h-4 rounded-full animate-pulse"
                  style={{
                    left: `${spot.x}%`,
                    top: `${spot.y}%`,
                    backgroundColor: spot.color,
                    boxShadow: `0 0 12px ${spot.color}`,
                  }}
                >
                  {activeSpot === spot.id && (
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#141f3a] border border-[var(--border-subtle)] rounded-lg text-xs font-semibold whitespace-nowrap z-10">
                      {spot.label}
                    </div>
                  )}
                </button>
              ))}
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#0d1426] border border-[var(--border-subtle)] rounded-3xl p-8"
              >
                <div className="text-sm font-bold tracking-wider uppercase text-[#4ecdc4] mb-4">云端 Teacher</div>
                <h3 className="text-2xl font-extrabold mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Cosmos3</h3>
                <ul className="space-y-4">
                  {specs.teacher.map((item) => (
                    <li key={item.key} className="flex justify-between items-center pb-4 border-b border-[var(--border-subtle)] last:border-0 last:pb-0">
                      <span className="text-[#a89f91] text-sm">{item.key}</span>
                      <span className="font-bold text-sm">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="bg-[#0d1426] border border-[var(--border-subtle)] rounded-3xl p-8"
              >
                <div className="text-sm font-bold tracking-wider uppercase text-[#e07800] mb-4">边缘 Student</div>
                <h3 className="text-2xl font-extrabold mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>机器狗端</h3>
                <ul className="space-y-4">
                  {specs.student.map((item) => (
                    <li key={item.key} className="flex justify-between items-center pb-4 border-b border-[var(--border-subtle)] last:border-0 last:pb-0">
                      <span className="text-[#a89f91] text-sm">{item.key}</span>
                      <span className="font-bold text-sm">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
