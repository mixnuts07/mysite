import { CreatedAtComponent } from "@/app/_components/CreatedAtComponent";
import { TagsComponent } from "@/app/_components/TagsComponent";
import { TitleComponent } from "@/app/_components/TitleComponent";
import type { ArticleTypeProps } from "@/types";
import Image from "next/image";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

export default function ArticleComponent({ props }: ArticleTypeProps) {
	return (
		<article className="mt-10 mb-5 flex flex-col justify-center items-center px-5">
			<article className="space-y-3 flex flex-col items-center justify-center px-5">
				{props.url != "" && (
					<Image src={props.url} alt="no image" width={200} height={200} />
				)}
				<TitleComponent title={props.title} className="text-xl" />
				<CreatedAtComponent date={props.createdAt} />
				<TagsComponent tags={props.tags} />
			</article>
			<div
				className="mt-10 mx-auto
                           break-words space-y-5
                           max-w-sm md:max-w-full
                           px-5"
			>
				<Markdown
					remarkPlugins={[remarkGfm]}
					className="max-w-sm md:max-w-full pt-5
                               prose
                               prose-code:before:hidden prose-code:after:hidden
                               prose-a:underline prose-a:underline-offset-4 prose-a:prose-blue
                               prose-h1:underline prose-h1:underline-offset-4
                               prose-h2:underline prose-h2:underline-offset-4
                               prose-h3:underline prose-h3:underline-offset-4
                               prose-h4:underline prose-h4:underline-offset-4
                               prose-h5:underline prose-h5:underline-offset-4
                               prose-h6:underline prose-h7:underline-offset-4
                               "
					components={{
						code({ node, className, children, ...props }) {
							const inline =
								node?.tagName === "code" && !className?.includes("language-");
							const match = /language-(\w+)/.exec(className || "");
							return (
								<>
									{!inline ? (
										<CodeBlock
											language={match ? match[1] : undefined}
											value={String(children).replace(/\n$/, "")}
											{...props}
										/>
									) : (
										<code className="inline font-mono text-blue-500 bg-gray-100 rounded-md border border-gray-300 break-words whitespace-nowrap overflow-x-auto">
											{children}
										</code>
									)}
								</>
							);
						},
					}}
				>
					{props.body}
				</Markdown>
			</div>
		</article>
	);
}

function CodeBlock({ language, value }: { value: string; language?: string }) {
	return (
		<SyntaxHighlighter
			style={coldarkDark}
			language={language}
			children={value}
			customStyle={{ padding: 0, margin: 0 }}
		/>
	);
}
