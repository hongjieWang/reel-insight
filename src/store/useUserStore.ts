import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 定义 State 和 Actions 的类型
interface UserState {
  token: string | null;
  userInfo: {
    name: string;
    avatar?: string;
    role?: string;
  } | null;
  // Actions
  setToken: (token: string) => void;
  setUserInfo: (info: UserState["userInfo"]) => void;
  logout: () => void;
}

// 创建 Store (包含持久化功能，自动存入 localStorage)
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      token: null,
      userInfo: null,

      setToken: (token) => set({ token }),
      setUserInfo: (info) => set({ userInfo: info }),
      logout: () => set({ token: null, userInfo: null }),
    }),
    {
      name: "reel-insight-storage", // localStorage 中的 key 名称
      storage: createJSONStorage(() => localStorage), // 默认就是 localStorage，可省略
    }
  )
);
