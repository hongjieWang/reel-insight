"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";
import { evolutionStages } from "../data/content";
import {
  FaImages,
  FaFilm,
  FaVideo,
  FaVrCardboard,
  FaCheck,
} from "react-icons/fa6";

// 图标映射
const iconMap: Record<string, IconType> = {
  FaImages: FaImages,
  FaFilm: FaFilm,
  FaVideo: FaVideo,
  FaVrCardboard: FaVrCardboard,
};

const EvolutionTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = evolutionStages[activeIndex];
  const ActiveIcon = iconMap[activeStage.icon];

  return (
    <section id="evolution" className="scroll-mt-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          技术与形态的演进史
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl">
          AI短剧并非一蹴而就，而是经历了从静态图文到动态视频，再到全流程生成的快速迭代。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左侧导航 */}
        <div className="lg:col-span-4 relative">
          <div className="timeline-line ml-3 lg:ml-0 lg:left-8"></div>
          <div className="space-y-6 relative z-10">
            {evolutionStages.map((stage: any, index: number) => (
              <button
                key={stage.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left relative pl-12 pr-6 py-4 rounded-xl border-2 transition-all duration-300 group flex flex-col justify-center min-h-[100px] hover:scale-[1.02]
                  ${
                    activeIndex === index
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-md"
                      : "bg-white border-slate-200 text-slate-500 hover:border-indigo-200 hover:bg-slate-50"
                  }
                `}
              >
                <div
                  className={`absolute left-[-2px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm z-20 transition-colors duration-300 ${
                    activeIndex === index ? "bg-white" : "bg-slate-300"
                  }`}
                ></div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70">
                  {stage.year}
                </div>
                <div className="text-lg font-bold">{stage.title}</div>
                <div className="text-sm opacity-80">{stage.subtitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 右侧内容显示 */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg min-h-[400px] flex flex-col justify-center relative overflow-hidden">
            {/* 装饰背景 */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            {/* 动态内容 - 使用 key 触发 React 的重绘动画 */}
            <div key={activeIndex} className="relative z-10 fade-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-3xl shadow-sm mr-6">
                  {ActiveIcon && <ActiveIcon />}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    {activeStage.title}
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {activeStage.year} | {activeStage.subtitle}
                  </p>
                </div>
              </div>

              {/* 使用 dangerouslySetInnerHTML 渲染包含 HTML 标签的字符串 */}
              <p
                className="text-lg text-slate-700 leading-relaxed mb-8 border-b border-slate-100 pb-6"
                dangerouslySetInnerHTML={{ __html: activeStage.content }}
              ></p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                    核心优势
                  </h4>
                  <ul className="space-y-1">
                    {activeStage.pros.map((p: any, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-slate-600 mb-1"
                      >
                        <FaCheck className="text-green-500 mr-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                    代表性工具
                  </h4>
                  <div className="flex flex-wrap">
                    {activeStage.tech.map((t: any, idx: number) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full mr-2 mb-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionTimeline;
