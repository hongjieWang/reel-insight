import request from "../utils/request";

// 定义用户类型
export interface User {
  id: number;
  name: string;
  email: string;
}

// 获取用户列表
export const getUserList = (params?: { page: number }) => {
  return request.get<any, User[]>("/users", { params });
};

// 创建用户
export const createUser = (data: Omit<User, "id">) => {
  return request.post<any, User>("/users", data);
};
