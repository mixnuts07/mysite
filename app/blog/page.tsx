import React from "react";
import { fetchEntries } from "../api/contentful";
import BlogComponent from "@/app/_components/BlogComponent";
import { UpdatedAt } from "@/app/lib";

export default async function Blog() {
  const entries = await fetchEntries();
  return (
    <div className='mx-5 mt-10 md:grid md:grid-cols-3 md:gap-4'>
      {entries.map((entry) => {
        return <BlogComponent key={entry.sys.id} props={{id: entry.sys.id, title: entry.fields.title, updatedAt: UpdatedAt(entry.sys.updatedAt), tags: entry.metadata.tags}}/>
      })}
    </div>
  );
}
