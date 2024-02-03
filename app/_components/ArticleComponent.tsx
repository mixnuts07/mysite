import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArticleTypeProps } from "@/types";
import TagComponent from "@/app/_components/TagComponent";

export default function ArticleComponent({props}: ArticleTypeProps) {
    return (
        <article className='my-10 flex justify-center items-center flex-col min-w-4/5'>
        <article className="mt-10 space-y-3 flex flex-col items-center">
            <h1 className='font-sans font-medium font-extrabold text-2xl first-line:uppercase first-letter:text-5xl first-letter:mr-1'>{props.title}</h1>
            <time dateTime={props.updatedAt} className='font-sans font-thin text-gray-500 text-xl'>{props.updatedAt}</time>
            {props.tags.map(tag => {
                return <TagComponent tagName={tag.sys.id} key={tag.sys.id} />
            })}
        </article>
            <article className='mt-10 break-words space-y-5 w-4/5'>
                <Markdown remarkPlugins={[remarkGfm]} className='prose prose-stone prose-a:underline prose-a:underline-offset-4 min-w-4/5 mx-10' components={{
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