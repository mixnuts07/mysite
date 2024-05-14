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

export async function generateMetadata({params}: {params: {id: string}}): Promise<Metadata> {
    const entry = await fetchEntry(params.id)
    const {title, body, thumbnail} = entry.fields;
    return  {
        title,
        description: body,
        openGraph: {
            images: [thumbnail?.fields?.file?.url]
        }
    }
}
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