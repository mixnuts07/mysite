import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";
import {ArticleTypeProps} from "@/types";
import {TitleComponent} from "@/app/_components/TitleComponent";
import {UpdatedAtComponent} from "@/app/_components/UpdatedAtComponent";
import {TagsComponent} from "@/app/_components/TagsComponent";

export default function ArticleComponent({props}: ArticleTypeProps) {
    return (
        <article className='mt-10 mb-5 flex justify-center items-center flex-col w-4/5 mx-auto'>
            <article className="space-y-3 flex flex-col justify-center items-center min-w-full px-5">
                <TitleComponent title={props.title} className='text-xl'/>
                <UpdatedAtComponent date={props.updatedAt}/>
                <TagsComponent tags={props.tags}/>
            </article>
            <Markdown remarkPlugins={[remarkGfm]} className='prose prose-a:underline prose-a:underline-offset-4 mt-10 break-words space-y-5 w-4/5 px-10' components={{
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
            }}}>
                {props.body}
            </Markdown>
        </article>
    )
}

function CodeBlock({language, value}: { value: string, language?: string }) {
    return (
        <SyntaxHighlighter style={okaidia} language={language} children={value}/>
    );
}