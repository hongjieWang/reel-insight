import request from "../utils/request";

// 定义统计卡片数据类型
export interface DashboardStats {
  totalScripts: number; // 总剧本数
  aiGenerated: number; // AI 生成数
  activeUsers: number; // 活跃用户
  totalViews: number; // 总播放量
}

// 获取统计数据
export const getDashboardStats = () => {
  // 模拟接口请求，实际项目中去掉 Promise.resolve 直接返回 request.get(...)
  return Promise.resolve({
    code: 200,
    message: "success",
    data: {
      totalScripts: 1205,
      aiGenerated: 850,
      activeUsers: 3200,
      totalViews: 450000,
    },
  } as const).then((res) => res.data); // 模拟 request.ts 的响应拦截处理

  // 真实写法:
  // return request.get<any, DashboardStats>('/dashboard/stats');
};
