import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import Header from "@/app/_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mixed_nuts_nuts",
  description: "山本和武のサイト。技術やプロダクト開発、決算分析など興味あることを投稿するよ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="flex flex-col items-center min-w-screen min-h-screen bg-white text-black">
          <Header/>
          <div className='mt-20'>
          {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
