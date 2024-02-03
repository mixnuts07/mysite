import Image, {ImageLoader, ImageLoaderProps} from "next/image";
import {Block, BLOCKS, Inline, MARKS} from "@contentful/rich-text-types";
import {documentToReactComponents, NodeRenderer, Options} from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import React, {ReactNode} from "react";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";

export default function ArticleComponent({props}: PostTypeProps) {
    // console.log('--body--')
    // console.log(props.body)
    return (
        <article className='my-10'>
        <article className="mt-10 flex flex-col justify-center items-center mx-10">
            <h1 className='font-sans font-medium font-extrabold text-2xl first-line:uppercase first-letter:text-5xl first-letter:mr-1'>{props.title}</h1>
            <time dateTime={props.updatedAt} className='pt-3 pb-10 font-sans font-thin text-gray-500 text-xl'>{props.updatedAt}</time>
        </article>
            <article className='break-words space-y-5'>
                <Markdown remarkPlugins={[remarkGfm]} className='prose prose-stone prose-a:text-blue-600'>{props.body}</Markdown>
            </article>
        </article>
    )
}

type PostType = {
    title: string
    body: string
    updatedAt: string
}

type PostTypeProps = {
    props: PostType
}

const options: Options = {
    renderMark: {
        [MARKS.BOLD]: (children: ReactNode) => <span className="font-extrabold">{children}</span>,
        [MARKS.UNDERLINE]: (children: ReactNode) => <span className='underline'>{children}</span>,
        [MARKS.ITALIC]: (children: ReactNode) => <span className='italic'>{children}</span>,
        [MARKS.CODE]: (children: ReactNode) => <code>{children}</code>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => <p className="mb-3">{children}</p>,
        [BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => <h1 className='text-5xl font-extrabold'>{children}</h1>,
        [BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => <h1 className='text-4xl font-bold'>{children}</h1>,
        [BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => <h1 className='text-3xl font-bold'>{children}</h1>,
        [BLOCKS.HEADING_4]: (node: Block | Inline, children: ReactNode) => <h1 className='text-2xl font-bold'>{children}</h1>,
        [BLOCKS.HEADING_5]: (node: Block | Inline, children: ReactNode) => <h1 className='text-xl font-bold'>{children}</h1>,
        [BLOCKS.HEADING_6]: (node: Block | Inline, children: ReactNode) => <h1 className='text-lg font-bold'>{children}</h1>,
        [BLOCKS.OL_LIST]: (node: Block | Inline, children: ReactNode) => <ol className='list-decimal ml-4'>{children}</ol>,
        [BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => <ul className='list-disc ml-4'>{children}</ul>,
        [BLOCKS.QUOTE]: (node: Block | Inline, children: ReactNode) => {
            return (
            <span className="text-gray-500 dark:text-gray-400 text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    {children}
            </blockquote>
            </span>
        )
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
            const src = `https://${node.data.target.fields.file.url}`
            const height = node.data.target.fields.file.details.image.height || 500
            const width = node.data.target.fields.file.details.image.width || 500
            return <Image src={src} height={height} width={width} alt={`${node.data.target.fields.description}`}/>
        },
        [BLOCKS.TABLE]: (node: Block | Inline, children: ReactNode) => <span className='bg-red-500'>{children}</span>,
        [BLOCKS.TABLE_HEADER_CELL]: (node: Block | Inline, children: ReactNode) => <span className='bg-green-500'>{children}</span>,
        [BLOCKS.TABLE_CELL]: (node: Block | Inline, children: ReactNode) => <span className='bg-blue-500'>{children}</span>,
        [BLOCKS.TABLE_ROW]: (node: Block | Inline, children: ReactNode) => <span className='bg-gray-500'>{children}</span>,
    },
};