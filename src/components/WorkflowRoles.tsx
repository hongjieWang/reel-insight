"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { workflowSteps } from "../data/content";
import {
  FaArrowRightLong,
  FaMicrochip,
  FaPenNib,
  FaUserTag,
  FaImage,
  FaVideo,
  FaMusic,
  FaScissors,
} from "react-icons/fa6";

const iconMap: Record<string, IconType> = {
  FaPenNib,
  FaUserTag,
  FaImage,
  FaVideo,
  FaMusic,
  FaScissors,
};

const WorkflowRoles = () => {
  // 默认不选或选第一个，这里选 null 让用户点击触发
  const [activeStepId, setActiveStepId] = useState<number | null>(null);
  const activeStep = workflowSteps.find((s: any) => s.id === activeStepId);

  return (
    <section id="workflow" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          人机协同新范式
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          AI
          并非完全取代人类，而是重新定义了岗位职责。未来的核心竞争力在于“创意+技术”的双重能力。
        </p>
      </div>

      {/* 角色转变卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 导演 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 transition group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-indigo-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">
                导演 Director
              </h3>
              <FaArrowRightLong className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
              <h3 className="text-xl font-bold text-indigo-600">AI 指令师</h3>
            </div>
            {/* 职责对比内容 */}
            <div className="flex gap-4 p-3 bg-slate-50 rounded-lg group-hover:bg-white border border-transparent group-hover:border-indigo-100 transition">
              <div className="w-1/2 border-r border-slate-200 pr-4">
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  旧职责
                </span>
                <p className="text-sm text-slate-600">
                  现场调度、演员沟通、机位控制
                </p>
              </div>
              <div className="w-1/2 pl-2">
                <span className="text-xs font-semibold text-indigo-400 block mb-1">
                  新核心
                </span>
                <p className="text-sm text-indigo-700 font-medium">
                  精准输出 Prompt、优化模型参数
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 演员 (类似结构，简化展示) */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-pink-300 transition group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-pink-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">演员 Actor</h3>
              <FaArrowRightLong className="text-slate-300 group-hover:text-pink-500 transition-colors" />
              <h3 className="text-xl font-bold text-pink-600">
                情感演绎 & 数据源
              </h3>
            </div>
            <div className="flex gap-4 p-3 bg-slate-50 rounded-lg group-hover:bg-white border border-transparent group-hover:border-pink-100 transition">
              <div className="w-1/2 border-r border-slate-200 pr-4">
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  旧职责
                </span>
                <p className="text-sm text-slate-600">
                  全程出镜、背诵台词、多机位拍摄
                </p>
              </div>
              <div className="w-1/2 pl-2">
                <span className="text-xs font-semibold text-pink-400 block mb-1">
                  新核心
                </span>
                <p className="text-sm text-pink-700 font-medium">
                  提供面部/动作捕捉数据
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 交互式 SOP */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-700">
            AI 短剧生产 SOP (点击步骤查看工具链)
          </h3>
          <span className="text-xs text-slate-400">基于 Page 1 提及流程</span>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-2">
            {workflowSteps.map((step: any) => {
              const Icon = iconMap[step.icon];
              const isActive = activeStepId === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`flex-1 bg-white border p-3 rounded-lg cursor-pointer hover:shadow-md transition text-center group
                    ${
                      isActive
                        ? "border-indigo-500 ring-2 ring-indigo-100"
                        : "border-slate-200 hover:border-indigo-500"
                    }
                  `}
                >
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 transition
                    ${
                      isActive
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                    }`}
                  >
                    {Icon && <Icon />}
                  </div>
                  <div className="text-xs font-bold text-slate-400 mb-1">
                    Step {step.id}
                  </div>
                  <div className="font-bold text-slate-700 text-sm">
                    {step.name}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`mt-6 p-4 rounded-xl border text-sm flex items-center justify-center text-center transition-all min-h-[80px]
              ${
                activeStep
                  ? "bg-indigo-50 border-indigo-100 text-indigo-800"
                  : "bg-slate-50 border-slate-100 text-slate-400"
              }
            `}
          >
            {activeStep ? (
              <div className="fade-in">
                <div className="text-indigo-600 font-bold text-lg mb-1 flex items-center justify-center">
                  <FaMicrochip className="mr-2" />
                  {activeStep.tool}
                </div>
                <div>{activeStep.desc}</div>
              </div>
            ) : (
              "点击上方步骤，查看 AI 如何赋能该环节"
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowRoles;
