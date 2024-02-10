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
        <article className='mt-10 mb-5 flex flex-col justify-center items-center'>
            <article className="space-y-3 flex flex-col items-center justify-center md:px-0">
                <TitleComponent title={props.title} className='text-xl'/>
                <UpdatedAtComponent date={props.updatedAt}/>
                <TagsComponent tags={props.tags}/>
            </article>
            <div
                className='mt-10 break-words space-y-5 max-w-full'
            >
            <Markdown
                remarkPlugins={[remarkGfm]}
                // className='prose prose-a:underline prose-a:underline-offset-4'
                components={{
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
                }}}
            >
                {props.body}
            </Markdown>
            </div>
            {/*<div className='mt-10 break-words space-y-5 max-w-full flex justify-center items-center'>*/}
            {/*    {props.body}*/}
            {/*</div>*/}
        </article>
    )
}

function CodeBlock({language, value}: { value: string, language?: string }) {
    return (
        <SyntaxHighlighter style={okaidia} language={language} children={value}/>
    );
}