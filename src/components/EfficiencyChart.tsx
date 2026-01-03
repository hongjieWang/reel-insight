"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaChartLine, FaCheck } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EfficiencyChart = () => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) label += ": ";
            if (context.parsed.y !== null) {
              if (context.dataIndex === 0)
                label += context.parsed.y + "% (相对值)";
              if (context.dataIndex === 1) label += context.parsed.y + " 人";
              if (context.dataIndex === 2)
                label += context.parsed.y + "% (相对耗时)";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: true, color: "#F1F5F9" },
        ticks: { display: false },
      },
      x: { grid: { display: false } },
    },
  };

  const data = {
    labels: ["制作成本", "团队规模", "制作周期"],
    datasets: [
      {
        label: "传统模式",
        data: [100, 20, 100],
        backgroundColor: "#CBD5E1",
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "AI 赋能模式",
        data: [20, 5, 10],
        backgroundColor: "#4F46E5",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  return (
    <section
      id="impact"
      className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 左侧文本 */}
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            <FaChartLine className="mr-2" /> 数据洞察 (Source: Page 188)
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            降本增效的"奇点"时刻
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            传统短剧制作依赖庞大的剧组、昂贵的设备和漫长的后期。AI
            技术的引入不仅是工具的替换，更是生产关系的重构。
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                <FaCheck className="text-xs" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-slate-900">极速验证</h4>
                <p className="text-sm text-slate-500">
                  素材测试周期从“数周”压缩至“分钟级”。
                </p>
              </div>
            </div>
            {/* 重复列表项可以封装为子组件 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                <FaCheck className="text-xs" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-slate-900">
                  无限创意落地
                </h4>
                <p className="text-sm text-slate-500">
                  低成本呈现“视觉化幻想”。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧图表 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">
            传统模式 vs. AI 赋能模式
          </h3>
          <div className="relative w-full max-w-[600px] h-[350px] mx-auto">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencyChart;
