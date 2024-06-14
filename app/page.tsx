"use client";
import BlogComponent from "@/app/_components/BlogComponent";
import { fetchEntries } from "@/app/api/contentful";
import { CreatedAt } from "@/app/lib";
import type { EntryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
	const [entries, setEntries] = useState<EntryType[] | undefined>(undefined);
	useEffect(() => {
		(async () => {
			const entries = await fetchEntries(2);
			setEntries(entries);
		})();
	}, []);

	return (
		<div>
			<Profile />
			<p className='flex items-center justify-center mt-10'>最新のブログ</p>
			{entries?.map((entry) => {
				return (
					<div key={entry.sys.id} className="mx-5 min-w-4/5">
						<BlogComponent
							props={{
								id: entry.sys.id,
								title: entry.fields.title,
								createdAt: CreatedAt(entry.sys.updatedAt),
								tags: entry.metadata.tags,
							}}
						/>
					</div>
				);
			})}
		</div>
	);
}

const Profile = () => {
	return (
		<div className="border-2 border-black rounded-lg mx-5 mt-10 p-5">
			<div className="flex flex-row items-end gap-3">
				<Image
					src="/img.png"
					alt="me"
					width="100"
					height="100"
					className="rounded-md"
				/>
				<div className="flex flex-row gap-3">
					<Link href="https://twitter.com/mixed_nuts_nuts">
						<Image
							src="/x.svg"
							alt="github"
							width="30"
							height="30"
							className="unoptimized"
						/>
					</Link>
					<Link href="https://github.com/mixnuts07">
						<Image
							src="/github.svg"
							alt="github"
							width="30"
							height="30"
							className="unoptimized"
						/>
					</Link>
				</div>
			</div>
			<div className="flex flex-col space-y-1.5 mt-3">
				<p>Kazutake Yamamoto</p>
				<p>山本 和武</p>
				<p>フリーのソフトウェアエンジニアです</p>
			</div>
		</div>
	);
};
