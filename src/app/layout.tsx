import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 配置 Noto Sans SC 本地字体
const notoSansSC = localFont({
  src: [
    {
      path: "./fonts/NotoSansSC-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansSC-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansSC-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansSC-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  // 定义 CSS 变量，方便在 Tailwind 中使用 (可选)
  variable: "--font-noto-sans-sc",
  // 使用 swap 策略，防止加载时文字隐形
  display: "swap",
});

// 2. 配置 SEO Metadata (服务端渲染生成的头部信息)
export const metadata: Metadata = {
  title: "AI 短剧发展进化论 | 深度解析报告",
  description:
    "探索 AI 技术如何将短剧制作成本降低 80%，并重塑导演与演员的核心角色。",
  keywords: ["AI短剧", "Sora", "Runway", "短剧制作", "AIGC"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${notoSansSC.className} antialiased bg-slate-50 text-slate-700`}
        suppressHydrationWarning={true}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{Array.from(document.body.getAttributeNames()).forEach(function(n){if(n && n.indexOf('mpa-')===0){document.body.removeAttribute(n)}})}catch(e){}})()`,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
