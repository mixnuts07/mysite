import Link from "next/link";
import React from "react";
import { BlogTypeProps } from "@/types";
import TagComponent from "@/app/_components/TagComponent";
import TitleComponent from "@/app/_components/TitleComponent";


export default function BlogComponent({props}: BlogTypeProps) {
    return (
        <div
            key={props.id}
            className="flex items-center border-black rounded-lg border-2 p-4 w-full h-2/5 mt-10
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-100"
        >
            <Link href={`blog/${props.id}`}>
                <TitleComponent title={props.title}/>
                <h5>{props.updatedAt}</h5>
                <div>
                {props.tags.map(tag=> {
                    return <TagComponent tagName={tag.sys.id} key={tag.sys.id}/>
                })}
                </div>
            </Link>
        </div>
    )
}