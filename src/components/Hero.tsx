import React from "react";
import { FaBookOpen } from "react-icons/fa6";

const Hero = () => {
  return (
    <header
      id="overview"
      className="pt-20 pb-16 bg-gradient-to-b from-indigo-50 via-white to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
          <FaBookOpen className="mr-2" />
          AIP自媒体·杰哥
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          AI 短剧行业的
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            进化与重构
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
          从“静态漫剧”到“全流程生成”，探索 AI 技术如何将制作成本降低
          80%，并重塑导演与演员的核心角色。
        </p>
        {/* Quick Stats Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              val: "80%",
              label: "制作成本降幅",
              desc: "百元级成本即可出品",
            },
            {
              val: "1 vs 4",
              label: "人效比",
              desc: "1个高手带4个实习生 = 传统20人团队",
            },
            {
              val: "30部+",
              label: "月产能",
              desc: "5人团队的极限产出",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm feature-card"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-1">
                {stat.val}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 mt-2">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
