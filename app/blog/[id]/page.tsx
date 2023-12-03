// "use client";
// import { client, fetchEntry } from "@/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { use, useEffect, useState } from "react";

// async function get(id: string) {
//   const entry = await client.getEntry(id);
//   const title = entry.fields.title ? entry.fields.title.toString() : "no title";
//   const body = entry.fields.body;
//   console.log(title);
//   console.log(documentToReactComponents(entry.fields.body));
// }

// // eslint-disable-next-line @next/next/no-async-client-component
// export default async function Page({ params }: { params: { id: string } }) {
//   // const entry = await client.getEntry(params.id);
//   // const title = entry.fields.title ? entry.fields.title.toString() : "no title";
//   // const body = entry.fields.body;
//   return (
//     <div className="mt-10">
//       {/* <h1>{title}</h1> */}
//       {/* <p>{documentToReactComponents(body)}</p> */}
//       <h1>te</h1>
//       <h1>te</h1>
//       <h1>te</h1>
//       <button onClick={() => get(params.id)}>click</button>
//     </div>
//   );
// }
// //

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="mt-10">
      <h1>todo</h1>
      <h1>id is {params.id}</h1>
    </div>
  );
}
