import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArticleTypeProps } from "@/types";

export default function ArticleComponent({props}: ArticleTypeProps) {
    return (
        <article className='my-10'>
        <article className="mt-10 flex flex-col justify-center items-center mx-10">
            <h1 className='font-sans font-medium font-extrabold text-2xl first-line:uppercase first-letter:text-5xl first-letter:mr-1'>{props.title}</h1>
            <time dateTime={props.updatedAt} className='pt-3 pb-10 font-sans font-thin text-gray-500 text-xl'>{props.updatedAt}</time>
        </article>
            <article className='break-words space-y-5'>
                <Markdown remarkPlugins={[remarkGfm]} className='prose prose-stone prose-a:text-blue-600' components={{
                    code({ node,  className, children, ...props}) {
                    const inline = node?.tagName === "code" && !className?.includes('language-')
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline ? (
                            <CodeBlock language={match ? match[1] : undefined} value={String(children).replace(/\n$/, '')} {...props} />
                        ) : (
                            <code className={className} {...props}>
                                {/*{children}*/}
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