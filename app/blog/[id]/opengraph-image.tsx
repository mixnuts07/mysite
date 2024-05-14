import { ImageResponse } from 'next/og'
import {fetchEntry} from "@/app/api/contentful";
import {Thumbnail} from "@/app/lib";

export const revalidate = "force-cache"
export const runtime = 'nodejs'
// Image metadata
export const alt = 'ogp image'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

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