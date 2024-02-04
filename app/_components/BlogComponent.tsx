import Link from "next/link";
import React from "react";
import { BlogTypeProps } from "@/types";
import { BlogTagComponent } from "@/app/_components/BlogTagComponent";
import { BlogTitleComponent } from "@/app/_components/BlogTitleComponent";
import { BlogUpdatedAtComponent } from "@/app/_components/BlogUpdatedAtComponent";


export default function BlogComponent({props}: BlogTypeProps) {
    return (
        <div
            key={props.id}
            className="flex items-center border-black rounded-lg border-2 h-2/5 mt-10 p-5 text-wrap min-w-4/5
                        transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-100"
        >
            <Link href={`blog/${props.id}`}>
                <BlogTitleComponent title={props.title}/>
                <BlogUpdatedAtComponent date={props.updatedAt}/>
                <div className='flex flex-row space-x-2'>
                {props.tags.map(tag=> {
                    return <BlogTagComponent tagName={tag.sys.id} key={tag.sys.id}/>
                })}
                </div>
            </Link>
        </div>
    )
}