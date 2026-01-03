import type { Metadata } from "next";
import { Geist, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Noto_Sans_SC({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. 配置字体
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
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
