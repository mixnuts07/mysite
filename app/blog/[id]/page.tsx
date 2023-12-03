// "use client";
// import { client, fetchEntry } from "@/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { useState } from "react";

// // eslint-disable-next-line @next/next/no-async-client-component
// export default async function Page({ params }: { params: { id: string } }) {
//   const [title, setTitle] = useState<string | undefined>(undefined);
//   // const entry = await client.getEntry(params.id);
//   // const title = entry.fields.title ? entry.fields.title.toString() : "no title";
//   // const body = entry.fields.body;
//   const entry = await fetchEntry(params.id);
//   console.log(entry);
//   setTitle(entry?.fields.title?.toString());
//   // const firstItem = entry?.items[0];
//   return (
//     <div className="mt-10">
//       <h1>{title}</h1>
//       {/* <p>{documentToReactComponents(body)}</p> */}
//       <h1>te</h1>
//       <h1>te</h1>
//       <h1>te</h1>
//     </div>
//   );
// }
// //
