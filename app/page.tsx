"use client";
import { fetchEntries } from "@/contentful";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogQueryResult } from "@/types";
import BlogComponent from "@/app/_components/BlogComponent";

export default function Home() {
  const [entries, setEntries] = useState<BlogQueryResult | undefined>(
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
      {entries?.items.map((entry) => {
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
