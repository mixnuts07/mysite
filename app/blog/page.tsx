import React from "react";
import { fetchEntries } from "@/contentful";
import BlogComponent from "@/app/_components/BlogComponent";
import { UpdatedAt } from "@/app/lib";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Blog() {
  const entries = await fetchEntries();
  return (
    <div className='mx-5'>
      {entries.map((entry) => {
        return <BlogComponent key={entry.sys.id} props={{id: entry.sys.id, title: entry.fields.title, updatedAt: UpdatedAt(entry.sys.updatedAt), tags: entry.metadata.tags}}/>
      })}
    </div>
  );
}
