import Link from "next/link";
import React from "react";
import { BlogTypeProps } from "@/types";


export default function BlogComponent({props}: BlogTypeProps) {
    return (
        <div
            key={props.id}
            className="flex items-center border-black rounded-lg border-2 p-4 w-full h-2/5 mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-100"
        >
            <Link href={`blog/${props.id}`}>
                <h2>{props.title}</h2>
                <h5>{props.updatedAt}</h5>
            </Link>
        </div>
    )
}