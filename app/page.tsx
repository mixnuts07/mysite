"use client";
import {BlogItem, fetchEntries} from "@/contentful";
import { useEffect, useState } from "react";
import BlogComponent from "@/app/_components/BlogComponent";

export default function Home() {
  const [entries, setEntries] = useState<BlogItem[] | undefined>(
    undefined
  );
  useEffect(() => {
    (async () => {
      const getEntries = await fetchEntries(2);
      setEntries(getEntries);
    })();
  }, []);

  return (
    <main className="w-4/5">
      {entries?.map((entry) => {
        const dateOnly = entry.sys.updatedAt.split("T")[0];
        return (
          <div
            key={entry.sys.id}
          >
           <BlogComponent props={{id: entry.sys.id, title: entry.fields.title.toString(), updatedAt: dateOnly}} />
          </div>
        );
      })}
    </main>
  );
}
