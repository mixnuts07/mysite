import { fetchEntries} from "@/contentful";
import React from "react";
import BlogComponent from "@/app/_components/BlogComponent";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Blog() {
  const entries = await fetchEntries();
  return (
    <div className="w-4/5">
      {entries.map((entry) => {
        const dateOnly = entry.sys.updatedAt.split("T")[0];
        return (
            <div key={entry.sys.id}>
            <BlogComponent props={{id: entry.sys.id, title: entry.fields.title, updatedAt: dateOnly}}/>
            </div>
        );
      })}
    </div>
  );
}
