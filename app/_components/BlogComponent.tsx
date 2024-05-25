import { CreatedAtComponent } from "@/app/_components/CreatedAtComponent";
import { TagsComponent } from "@/app/_components/TagsComponent";
import { TitleComponent } from "@/app/_components/TitleComponent";
import type { BlogTypeProps } from "@/types";
import Link from "next/link";
import React from "react";

export default function BlogComponent({ props }: BlogTypeProps) {
	return (
		<Link href={`blog/${props.id}`}>
			<div
				key={props.id}
				className="flex flex-col items-center justify-center mx-auto
                       h-3/5 md:h-4/5 mt-5 p-5 md:p-10
                       border-black rounded-lg border-2 text-wrap shadow-2xl
                       transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100"
			>
				<TitleComponent title={props.title} />
				<CreatedAtComponent date={props.createdAt} />
				<TagsComponent tags={props.tags} />
			</div>
		</Link>
	);
}
