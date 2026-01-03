export const evolutionStages = [
  {
    id: "stage1",
    title: "阶段一：静态图文期",
    subtitle: "AI 漫剧 (PPT 剧)",
    year: "2022 - 2023 初",
    icon: "FaImages", // 我们将在组件中映射这些字符串到图标
    content:
      "这是 AI 短剧的雏形阶段。创作者主要使用 <strong>Midjourney</strong> 或 <strong>Stable Diffusion</strong> 生成高精度的静态图像，配合 AI 配音（TTS）和简单的运镜特效（如剪映的关键帧）制作成类似“动态 PPT”的视频。",
    pros: ["技术门槛低", "画面精美度高", "单人即可完成"],
    tech: ["Midjourney", "Stable Diffusion", "剪映"],
  },
  {
    id: "stage2",
    title: "阶段二：图生视频期",
    subtitle: "动态漫剧 & 简单动画",
    year: "2023 中",
    icon: "FaFilm",
    content:
      "随着 <strong>Runway Gen-1/Gen-2</strong> 和 <strong>Pika</strong> 等工具的出现，创作者开始让静态图片“动起来”。配合 <strong>HeyGen</strong> 等口型同步工具，角色开始具备说话的能力。这一阶段的短剧开始具备影视感。",
    pros: ["画面有了生命力", "叙事能力增强", "能制作简单的奇幻特效"],
    tech: ["Runway Gen-2", "Pika Labs", "D-ID/HeyGen"],
  },
  {
    id: "stage3",
    title: "阶段三：全流程生成期",
    subtitle: "AI 原生短剧",
    year: "2023 末 - 2024",
    icon: "FaVideo",
    content:
      "以 <strong>Sora</strong> (概念发布)、<strong>Kling (可灵)</strong>、<strong>Jimeng (即梦)</strong> 为代表。AI 可以直接通过文本生成连贯的、长达 5-10 秒的高质量视频。剧本、分镜、视频、音乐全流程 AI 化。行业开始出现细分工种。",
    pros: ["物理规律模拟更真实", "长镜头的稳定性", "商业化变现路径跑通"],
    tech: ["Sora", "Kling (可灵)", "Jimeng (即梦)", "Suno (音乐)"],
  },
  {
    id: "stage4",
    title: "阶段四：人机深度协同",
    subtitle: "未来的交互式影游",
    year: "2025+",
    icon: "FaVrCardboard",
    content:
      "手册预测的未来形态。AI 不仅是制作工具，更是实时生成引擎。观众可能通过自然语言改变剧情走向，实现“千人千剧”。导演成为“指令工程师”，演员成为“数据提供者”。",
    pros: ["无限的个性化内容", "沉浸式体验", "极低的边际成本"],
    tech: ["Real-time Gen", "Interactive AI", "UE5 + AI"],
  },
];

export const workflowSteps = [
  {
    id: 1,
    name: "选题与剧本",
    tool: "ChatGPT / Claude",
    desc: "AI 辅助头脑风暴，快速生成多版本剧本大纲，并拆解为分镜头脚本。",
    icon: "FaPenNib",
  },
  {
    id: 2,
    name: "角色定型",
    tool: "MJ / SD (LoRA)",
    desc: "生成具有固定特征的角色三视图，训练 LoRA 模型以保持角色在不同场景中的一致性。",
    icon: "FaUserTag",
  },
  {
    id: 3,
    name: "分镜绘制",
    tool: "Midjourney",
    desc: "批量生成高审美分镜图，确定光影基调和构图。",
    icon: "FaImage",
  },
  {
    id: 4,
    name: "视频生成",
    tool: "Runway / 可灵",
    desc: "图生视频 (I2V)，控制运镜（推拉摇移），添加动态效果。",
    icon: "FaVideo",
  },
  {
    id: 5,
    name: "配音配乐",
    tool: "ElevenLabs / Suno",
    desc: "克隆特定音色进行配音，根据情绪自动生成背景音乐 (BGM)。",
    icon: "FaMusic",
  },
  {
    id: 6,
    name: "剪辑合成",
    tool: "CapCut / Premiere",
    desc: "将素材串联，调整节奏，添加特效与字幕。",
    icon: "FaScissors",
  },
];
