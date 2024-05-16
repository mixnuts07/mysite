import { ImageResponse } from 'next/og'
import {fetchEntry} from "@/app/api/contentful";
import {Thumbnail} from "@/app/lib";

export const runtime = 'nodejs'
export const revalidate = "force-cache"
export const contentType = 'image/png'
export const alt = 'ogp'
export const size = {
    width: 1200,
    height: 630,
}

// Image generation
// export default async function Image({params}: {params: {id: string}}) {
//     const entry = await fetchEntry(params.id)
//     const {title, body} = entry.fields;
//     const thumbnail = Thumbnail(entry.fields?.thumbnail?.fields?.file?.url)
//     return new ImageResponse(
//         (
//             // ImageResponse JSX element
//             <div
//                 style={{
//                     fontSize: 48,
//                     background: 'white',
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                 }}
//             >
//                 {title}
//             </div>
//         )
//     )
// }