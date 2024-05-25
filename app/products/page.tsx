import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div className="flex flex-col min-h-screen min-w-full mt-20 mx-auto px-10">
			<Product></Product>
		</div>
	);
}

function Product() {
	return (
		<Link href="https://waf-iota.vercel.app/" target="_blank">
			<section className="flex flex-col gap-5 items-center border-2 border-black rounded-md p-10">
				<h1 className="font-bold text-2xl">WAF</h1>
				<p>WAFは世界中の人々の知をつなぐSNSです</p>
				<Image src="/waf.jpg" alt="waf" width="500" height="400" />
			</section>
		</Link>
	);
}
