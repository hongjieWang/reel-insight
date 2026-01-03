import axios from "axios";
import type {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// 定义接口返回的标准格式 (根据后端实际情况调整)
interface Result<T = any> {
  code: number;
  message: string;
  data: T;
}

// 1. 创建 axios 实例
const service: AxiosInstance = axios.create({
  // 从环境变量获取 Base URL (后面会讲怎么配)
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 10000, // 请求超时时间
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 2. 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如：从 localStorage 获取 token 并添加到 header
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 3. 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 2xx 范围内的状态码都会触发该函数
    const { code, message, data } = response.data as Result;

    // 假设后端约定 code === 200 为成功
    if (code === 200) {
      return data; // 直接返回业务数据，剥离外层包装
    } else {
      // 处理业务错误 (例如弹窗提示)
      console.error(`业务错误: ${message}`);
      return Promise.reject(new Error(message || "Error"));
    }
  },
  (error: AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数
    let message = "";
    const status = error.response?.status;

    switch (status) {
      case 401:
        message = "未授权，请重新登录";
        // 这里可以执行登出逻辑，跳转到登录页
        break;
      case 403:
        message = "拒绝访问";
        break;
      case 404:
        message = "请求地址出错";
        break;
      case 500:
        message = "服务器内部错误";
        break;
      default:
        message = "网络连接故障";
    }

    console.error(message);
    return Promise.reject(error);
  }
);

export default service;
