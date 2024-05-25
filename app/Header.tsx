import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<header className="fixed top-0 z-10 py-8 shadow-md min-w-full bg-primary">
			<div className="flex items-center justify-center font-bold underline">
				<div className="flex gap-5">
					<Link href="/">
						<h1>home</h1>
					</Link>
					<Link href="/products">
						<h1>products</h1>
					</Link>
					<Link href="/blog">
						<h1>blog</h1>
					</Link>
				</div>
			</div>
		</header>
	);
}
