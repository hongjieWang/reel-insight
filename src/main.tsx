import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 注入路由配置 */}
    <RouterProvider router={router} />
  </StrictMode>
);
