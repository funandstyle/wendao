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
              className="relative bg-[#0d1426] border border-[var(--border-subtle)] rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden"
            >
              <img
                src="/wendao/images/robot-dog-hero.png"
                alt="机器狗产品图"
                className="w-full h-full object-contain"
              />

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
