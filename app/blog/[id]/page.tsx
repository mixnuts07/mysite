"use client";
import { fetchEntry } from "@/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({ params }: { params: { id: string } }) {
  const entry = await fetchEntry(params.id);
  console.log(entry);
  // const firstItem = entry?.items[0];
  return (
    <div className="mt-10">
      <h1>{entry?.items?.fields.title}</h1>
      {/* <p>{documentToReactComponents(entry?.fields)}</p> */}
      <h1>te</h1>
      <h1>te</h1>
      <h1>te</h1>
    </div>
  );
}
