import "./globals.css";
import Header from "@/app/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import type React from "react";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body className={`bg-primary ${inter.className}`}>
				<main className="flex flex-col items-center min-w-screen min-h-screen bg-primary text-black">
					<Header />
					<div className="mt-20">{children}</div>
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}
