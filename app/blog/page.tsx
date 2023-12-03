import { fetchEntries } from "@/contentful";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Blog() {
  const entries = await fetchEntries();
  return (
    <div className="w-4/5">
      {entries?.items.map((entry) => {
        const dateOnly = entry.sys.updatedAt.split("T")[0];
        return (
          <div
            key={entry.sys.id}
            className=" border-black rounded-lg border-2 p-4 w-full h-2/5 mt-10 hover:bg-slate-100 hover:border-slate-300"
          >
            <Link href={`blog/${entry.sys.id}`}>
              <h2>{entry.fields.title?.toString()}</h2>
              <h5>{dateOnly}</h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
