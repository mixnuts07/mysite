import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter, Montserrat } from "next/font/google";
import Header from "@/app/_components/Header";

const inter = Montserrat({subsets: ["latin"]})
export const metadata: Metadata = {
  // title: "mixed_nuts_nuts",
  // description: "興味あることを投稿するよ",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "mixed nuts",
  //   description: "興味あることを投稿していく",
  //   creator: "mixed_nuts_nuts",
  // },
  // openGraph: {
  //   description: "test",
  //   url: ""
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
    <body className={`bg-white ${inter.className}`}>
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
