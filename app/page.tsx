"use client";
import { fetchEntries } from "@/contentful";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogQueryResult } from "@/types";

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
            className="flex items-center justify-center border-black rounded-lg border-2 p-4 h-2/5 mt-10 hover:bg-slate-100 hover:border-slate-300"
          >
            <Link href={`blog/${entry.sys.id}`}>
              <h2>{entry.fields.title?.toString()}</h2>
              <h5>{dateOnly}</h5>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
