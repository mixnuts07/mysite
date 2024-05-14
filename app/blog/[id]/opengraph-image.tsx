import { ImageResponse } from 'next/og'
import {fetchEntry} from "@/app/api/contentful";
import {Thumbnail} from "@/app/lib";
import type {Metadata} from "next";

export const revalidate = "force-cache"
export const runtime = 'nodejs'
// Image metadata
export const alt = 'ogp image'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export const metadata: Metadata = {
    twitter: {
        card: "summary_large_image",
        title: "test",
        description: "ikeruka"
    },
    openGraph: {
        description: "test description",
        url: ""
    }
};
// export const metadata: Metadata = {
// title: "mixed_nuts_nuts",
// description: "興味あることを投稿するよ",
// twitter: {
//   card: "summary_large_image",
//   title: "mixed nuts",
//   description: "興味あることを投稿していく",
//   creator: "mixed_nuts_nuts",
// },
// openGraph: {
//   description: "test",
//   url: ""
// }
// };
// Image generation
export default async function Image({params}: {params: {id: string}}) {
    const entry = await fetchEntry(params.id)
    const {title, body} = entry.fields;
    const url = Thumbnail(entry.fields?.thumbnail?.fields?.file?.url)

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 48,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {title}
            </div>
        )
    )
}