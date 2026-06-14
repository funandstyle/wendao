export const navLinks = [
  { label: '首页', href: '/' },
  { label: '场景', href: '/scenes/' },
  { label: '技术', href: '/tech/' },
  { label: '规格', href: '/specs/' },
]

export const heroContent = {
  eyebrow: '智能陪伴 · 自主导航 · 安全交互',
  title: ['四足机器狗', '家庭智能陪伴伙伴'],
  desc: '面向有老人或儿童的家庭，具备自主导航、物品携带、场景理解和安全交互能力的下一代陪伴机器人。',
  cta: '探索产品架构',
}

export const positioningCards = [
  {
    icon: 'box',
    title: '产品形态',
    text: '四足机器狗（Quadruped Robot Dog），仿生四足结构设计，适应室内外多种地形，具备高机动性和稳定性。',
  },
  {
    icon: 'heart',
    title: '核心定位',
    text: '面向家庭的智能陪伴伙伴，具备自主导航、物品携带、场景理解和安全交互能力，让科技更有温度。',
  },
  {
    icon: 'users',
    title: '目标用户',
    text: '有老人或儿童的家庭。为老人提供日常陪伴与辅助，为儿童创造安全有趣的户外互动体验。',
  },
]

export const scenarios = [
  {
    tag: '场景 A',
    title: '陪伴老人早晨买菜',
    desc: '自主跟随老人穿越繁忙菜市场，智能避让人流与障碍。携带购物篮，减轻负重负担。实时监测老人状态，确保安全。',
    color: 'warm',
  },
  {
    tag: '场景 B',
    title: '陪伴儿童公园玩耍',
    desc: '在草地、坡道等复杂地形灵活移动，陪伴孩子奔跑游戏。实时环境感知确保远离水域和危险区域，让家长安心。',
    color: 'cool',
  },
]

export const archLayers = [
  { num: '01', title: '感知层 Perception', desc: '学生视觉模型，由 Teacher 的 Reasoner 能力蒸馏而来。融合多模态传感器输入，实现场景理解与物体识别。' },
  { num: '02', title: '世界模型层 World Model', desc: '由 Cosmos3 的 Forward Dynamics 和 Environment Prediction 蒸馏出的轻量世界模型，预测未来场景演化。' },
  { num: '03', title: '决策控制层 Policy & Control', desc: '学生动作模型，由 Cosmos3 的 Policy/World-Action Model 蒸馏。实时决策，输出精确的运动控制指令。' },
  { num: '04', title: '硬件执行层 Hardware', desc: '基于 NVIDIA Jetson Orin NX 的边缘计算平台，驱动四足伺服电机，实现 Stand / Walk / Trot / Gallop 四种步态。' },
]

export const pipelineSteps = [
  { num: 1, title: '仿真场景生成', desc: 'Cosmos3 Teacher 生成多样化仿真场景：菜市场（不同天气/人流密度）、公园（草地/坡道/水域）' },
  { num: 2, title: 'Teacher 策略训练', desc: '在仿真环境中用 Cosmos3 的 Policy 模式训练完整策略（全模态输入，无算力限制）' },
  { num: 3, title: '行为蒸馏', desc: '用 Teacher 策略的轨迹数据训练 Student（BC），再用 DAgger 逐步让 Student 独立决策' },
  { num: 4, title: '模型压缩', desc: 'Student 网络量化（FP16 -> INT8），结构剪枝，确保在 Jetson 上 < 50ms 推理延迟' },
  { num: 5, title: 'Sim-to-Real', desc: 'Domain Randomization（纹理/光照/噪声）+ 少量真实环境数据微调 + 安全边界校验' },
  { num: 6, title: '持续迭代', desc: '部署后采集真实数据回传，Teacher 增量学习，定期更新 Student 模型' },
]

export const specs = {
  teacher: [
    { key: '模型规模', value: '大模型（云端）' },
    { key: '算力', value: '无限制' },
    { key: '输入模态', value: '全模态' },
    { key: '功能', value: '训练 / 蒸馏 / 增量学习' },
  ],
  student: [
    { key: '模型规模', value: '~300M 参数' },
    { key: '硬件平台', value: 'Jetson Orin NX' },
    { key: '推理延迟', value: '< 50ms' },
    { key: '量化精度', value: 'INT8' },
  ],
}

export const stats = [
  { value: 300, suffix: 'M', label: '参数规模' },
  { value: 50, suffix: 'ms', label: '推理延迟' },
  { value: 4, suffix: '种', label: '运动步态' },
  { value: 99, suffix: '%', label: '避障准确率' },
]
