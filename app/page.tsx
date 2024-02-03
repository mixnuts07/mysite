"use client";
import { fetchEntries } from "@/contentful";
import { useEffect, useState } from "react";
import BlogComponent from "@/app/_components/BlogComponent";
import { UpdatedAt } from "@/app/lib";
import { EntryType } from "@/types";

export default function Home() {
  const [entries, setEntries] = useState<EntryType[] | undefined>(
    undefined
  );
  useEffect(() => {
    (async () => {
      const entries = await fetchEntries(2);
      setEntries(entries);
    })();
  }, []);

  return (
    <div>
      {entries?.map((entry) => {
        return (
          <div
            key={entry.sys.id}
          >
           <BlogComponent props={{id: entry.sys.id, title: entry.fields.title, updatedAt: UpdatedAt(entry.sys.updatedAt), tags: entry.metadata.tags}} />
          </div>
        );
      })}
    </div>
  );
}
