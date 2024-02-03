import Link from "next/link";
import React from "react";

type BlogType = {
    id: string
    title: string
    updatedAt: string
}
type BlogTypeProps = {
    props: BlogType
}
export default function BlogComponent({props}: BlogTypeProps) {
    return (
        <div
            key={props.id}
            className="flex items-center border-black rounded-lg border-2 p-4 w-full h-2/5 mt-10 hover:bg-slate-100 hover:border-slate-300"
        >
            <Link href={`blog/${props.id}`}>
                <h2>{props.title}</h2>
                <h5>{props.updatedAt}</h5>
            </Link>
        </div>
    )
}