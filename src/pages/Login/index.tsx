import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";

const Login = () => {
  const navigate = useNavigate();
  const setToken = useUserStore((state) => state.setToken);

  const handleLogin = () => {
    // 模拟登录操作
    const mockToken = "eyJhbGciOiJIUzI1Ni...";
    setToken(mockToken);
    // 登录成功跳转到首页
    navigate("/");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div className="card">
        <h2>登录 ReelInsight</h2>
        <button onClick={handleLogin}>模拟点击登录</button>
      </div>
    </div>
  );
};

export default Login;
