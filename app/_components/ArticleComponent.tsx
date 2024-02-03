import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArticleTypeProps } from "@/types";

export default function ArticleComponent({props}: ArticleTypeProps) {
    return (
        <article className='my-10 flex justify-center items-center flex-col'>
        <article className="mt-10 space-y-3 flex flex-col items-center">
            <h1 className='font-sans font-medium font-extrabold text-2xl first-line:uppercase first-letter:text-5xl first-letter:mr-1'>{props.title}</h1>
            <time dateTime={props.updatedAt} className='font-sans font-thin text-gray-500 text-xl'>{props.updatedAt}</time>
            {props.tags.map(tag => {
                return (
                    <div key={tag.sys.id} className='border-2 rounded-xl text-gray-700'>
                    <h4 >{tag.sys.id}</h4>
                    </div>
                )
            })}
        </article>
            <article className='mt-10 break-words space-y-5'>
                <Markdown remarkPlugins={[remarkGfm]} className='prose prose-stone prose-a:underline prose-a:underline-offset-4' components={{
                    code({ node,  className, children, ...props}) {
                    const inline = node?.tagName === "code" && !className?.includes('language-')
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline ? (
                            <CodeBlock language={match ? match[1] : undefined} value={String(children).replace(/\n$/, '')} {...props} />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }}}>{props.body}</Markdown>
            </article>
        </article>
    )
}
function CodeBlock ({ language, value }: {value: string, language?: string}) {
    return (
        <SyntaxHighlighter style={okaidia} language={language} children={value} />
    );
}