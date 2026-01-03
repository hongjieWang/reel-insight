import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

const MainLayout = () => {
  const token = useUserStore((state) => state.token);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  // 简单的路由守卫：如果没有 token，重Qr向到登录页
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* 模拟侧边栏 */}
      <aside style={{ width: "200px", background: "#f0f2f5", padding: "20px" }}>
        <h3>ReelInsight</h3>
        <nav>
          <div style={{ margin: "10px 0" }}>📊 数据大屏</div>
          <div style={{ margin: "10px 0" }}>qc 用户管理</div>
        </nav>
      </aside>

      {/* 右侧内容区 */}
      <main style={{ flex: 1, padding: "20px" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <span>欢迎回来</span>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            退出登录
          </button>
        </header>

        {/* 子路由渲染出口 */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
