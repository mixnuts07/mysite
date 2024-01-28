import Image from "next/image";
import {Block, BLOCKS, Inline, MARKS} from "@contentful/rich-text-types";
import {documentToReactComponents, NodeRenderer, Options} from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import {ReactNode} from "react";
export default function PostComponent({props}: PostTypeProps) {
    return (
        <article>
            <title>{props.title}</title>
            <time dateTime={props.updatedAt}></time>
            <article>
                {documentToReactComponents(props.body, options)}
            </article>
        </article>
    )
}

type PostType = {
    title: string
    body: Document
    updatedAt: string
}

type PostTypeProps = {
    props: PostType
}

const options: Options = {
    renderMark: {
        [MARKS.BOLD]: (children: ReactNode) => <span className="font-extrabold">{children}</span>,
        [MARKS.UNDERLINE]: (children: ReactNode) => <span className='underline'>{children}</span>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => <p className="align-center">{children}</p>,
        [BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => <h1 className='bg-green-200'>{children}</h1>,
        [BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => <h1 className='bg-green-200'>{children}</h1>,
        [BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => <h1 className='bg-green-200'>{children}</h1>,
        [BLOCKS.HEADING_4]: (node: Block | Inline, children: ReactNode) => <h1 className='bg-green-200'>{children}</h1>,
        [BLOCKS.HEADING_5]: (node: Block | Inline, children: ReactNode) => <h1 className='bg-green-200'>{children}</h1>,
        [BLOCKS.HEADING_6]: (node: Block | Inline, children: ReactNode) => <h1 className='bg-green-200'>{children}</h1>,
        [BLOCKS.OL_LIST]: (node: Block | Inline, children: ReactNode) => <ol className='bg-gray-500'>{children}</ol>,
        [BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => <ul className='bg-gray-500'>{children}</ul>,
        [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: ReactNode) => <li>{children}</li>,
        [BLOCKS.QUOTE]: (node: Block | Inline, children: ReactNode) => {
            return (
            <span className="text-gray-500 dark:text-gray-400 text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    {children}
            </blockquote>
            </span>
        )
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline, children: ReactNode) => {
            const src = "https://" + node.data.target.fields.file.url
            const height = node.data.target.fields.file.details.height || 100
            const width = node.data.target.fields.file.details.height || 100
            return <Image src={src} height={height} width={width} alt='image'/>
        },
        [BLOCKS.TABLE]: (node: Block | Inline, children: ReactNode) => <span className='bg-red-500'>{children}</span>,
        [BLOCKS.TABLE_HEADER_CELL]: (node: Block | Inline, children: ReactNode) => <span className='bg-green-500'>{children}</span>,
        [BLOCKS.TABLE_CELL]: (node: Block | Inline, children: ReactNode) => <span className='bg-blue-500'>{children}</span>,
        [BLOCKS.TABLE_ROW]: (node: Block | Inline, children: ReactNode) => <span className='bg-gray-500'>{children}</span>,
    },
};