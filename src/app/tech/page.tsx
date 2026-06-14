'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { archLayers, pipelineSteps } from '@/data/content'
import { ChevronDown, Cloud, Cpu } from 'lucide-react'

const layerColors = [
  'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  'from-green-500/20 to-green-600/10 border-green-500/30',
  'from-orange-500/20 to-orange-600/10 border-orange-500/30',
]

function ArchLayer({ layer, index }: { layer: typeof archLayers[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative"
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`cursor-pointer flex items-center gap-6 p-6 md:p-8 rounded-2xl border bg-gradient-to-r ${layerColors[index]} transition-all duration-300 hover:translate-x-2 hover:shadow-lg`}
      >
        <div className="text-4xl md:text-5xl font-extrabold opacity-50 min-w-[60px]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          {layer.num}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{layer.title}</h3>
          <p className="text-sm text-[#a89f91]">{layer.desc}</p>
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 p-6 bg-[#141f3a] rounded-xl border border-[var(--border-subtle)]">
              <p className="text-[#a89f91] leading-relaxed">
                {layer.num === '01' && '感知层负责从摄像头、激光雷达、IMU 等多模态传感器收集环境信息。通过 Cosmos3 Reasoner 蒸馏的轻量 ViT 编码器，实时解析场景语义、检测障碍物、识别行人与物体类别，为上层决策提供高质量感知输入。'}
                {layer.num === '02' && '世界模型层基于 Forward Dynamics 和 Environment Prediction，能够预测未来 2 秒内（10 步 @ 5Hz）的场景演化。这让机器狗能够预判行人轨迹、预测交通灯变化，从而提前规划安全路径。'}
                {layer.num === '03' && '决策控制层接收感知和世界模型的输出，通过 Policy 网络实时生成运动控制指令。BC + DAgger 蒸馏确保策略在边缘设备上运行流畅，同时保留云端大模型的智能水平。'}
                {layer.num === '04' && '硬件执行层基于 NVIDIA Jetson Orin NX，四足各配置 3 个伺服电机（共 12 个），支持 Stand（静止）、Walk（0-1 m/s）、Trot（1-3 m/s）、Gallop（3-5 m/s）四种步态，适应不同场景速度需求。'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {index < archLayers.length - 1 && (
        <div className="flex justify-center my-2 opacity-40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ecdc4" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      )}
    </motion.div>
  )
}

export default function TechPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">System Architecture</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              技术架构
            </h1>
            <p className="text-lg text-[#a89f91] max-w-2xl mx-auto">
              从云端大模型到边缘推理，四层架构让 AI 真正落地到家庭陪伴场景
            </p>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
          {archLayers.map((layer, i) => (
            <ArchLayer key={layer.num} layer={layer} index={i} />
          ))}
        </section>

        <section className="px-6 md:px-12 py-24" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,20,38,0.6) 50%, transparent)' }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">Teacher-Student Distillation</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                云端 Teacher → 边缘 Student
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#0d1426] border border-[var(--border-subtle)] rounded-2xl p-8 text-center"
              >
                <Cloud className="w-12 h-12 text-[#4ecdc4] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Cosmos3 Teacher</h3>
                <p className="text-sm text-[#a89f91]">云端大模型 · 无限算力 · 全模态输入</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#0d1426] border border-[var(--border-subtle)] rounded-2xl p-8 text-center"
              >
                <Cpu className="w-12 h-12 text-[#e07800] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">机器狗 Student</h3>
                <p className="text-sm text-[#a89f91]">~300M 参数 · Jetson Orin NX · INT8 量化</p>
              </motion.div>
            </div>

            <div className="flex justify-center my-8">
              <svg width="200" height="40" viewBox="0 0 200 40" className="opacity-60">
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#e07800" />
                  </marker>
                </defs>
                <line x1="20" y1="20" x2="180" y2="20" stroke="#e07800" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />
                <circle cx="40" cy="20" r="3" fill="#4ecdc4">
                  <animate attributeName="cx" from="40" to="160" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="40" cy="20" r="3" fill="#4ecdc4">
                  <animate attributeName="cx" from="40" to="160" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="40" cy="20" r="3" fill="#4ecdc4">
                  <animate attributeName="cx" from="40" to="160" dur="2s" begin="1s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-semibold tracking-[0.15em] uppercase text-[#4ecdc4] mb-4">Training Pipeline</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              六步蒸馏训练
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pipelineSteps.map((step, i) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
              return (
                <motion.div
                  key={step.num}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-[#0d1426] border border-[var(--border-subtle)] rounded-2xl p-6 hover:-translate-y-1.5 hover:border-[#4ecdc4] hover:shadow-[0_15px_50px_rgba(78,205,196,0.1)] transition-all duration-400"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e07800] to-[#c46a00] flex items-center justify-center text-white text-sm font-extrabold mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#a89f91] leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
