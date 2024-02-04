import Link from "next/link";
import React from "react";
import { BlogTypeProps } from "@/types";
import { TitleComponent } from "@/app/_components/TitleComponent";
import { UpdatedAtComponent } from "@/app/_components/UpdatedAtComponent";
import {TagsComponent} from "@/app/_components/TagsComponent";


export default function BlogComponent({props}: BlogTypeProps) {
    return (
        <div
            key={props.id}
            className="flex items-center border-black rounded-lg border-2 h-2/5 mt-10 p-5 text-wrap min-w-4/5
                        transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-100"
        >
            <Link href={`blog/${props.id}`}>
                <TitleComponent title={props.title}/>
                <UpdatedAtComponent date={props.updatedAt}/>
                <TagsComponent tags={props.tags} />
            </Link>
        </div>
    )
}