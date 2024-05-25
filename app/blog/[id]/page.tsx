import ArticleComponent from "@/app/_components/ArticleComponent";
import { CreatedAt, Thumbnail } from "@/app/lib";
import type { Metadata } from "next";
import { fetchEntry } from "../../api/contentful";

export default async function Page({ params }: { params: { id: string } }) {
	const entry = await fetchEntry(params.id);
	const { title, body } = entry.fields;
	const { tags } = entry.metadata;
	const { sys } = entry;
	const createdAt = CreatedAt(sys.createdAt);
	const url = Thumbnail(entry.fields?.thumbnail?.fields?.file?.url);
	return (
		<div className="mb-32">
			{/*<title>{title}</title>*/}
			<ArticleComponent props={{ title, body, url, createdAt, tags }} />
		</div>
	);
}

export async function generateMetadata({
	params,
}: { params: { id: string } }): Promise<Metadata> {
	const entry = await fetchEntry(params.id);
	const { title, body, thumbnail } = entry.fields;
	return {
		title,
		description: body.slice(0, 100),
		openGraph: {
			images: [thumbnail?.fields?.file?.url],
		},
		twitter: {
			card: "summary_large_image",
			title: title,
			description: body.slice(0, 100),
			creator: "mixed_nuts_nuts",
		},
	};
}
