"use client";
import { fetchEntries } from "@/contentful";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Blog() {
  const entries = await fetchEntries();
  return (
    <div className="my-5">
      {entries?.items.map((entry) => {
        const dateOnly = entry.sys.createdAt.split("T")[0];
        return (
          <div
            key={entry.sys.id}
            className=" border-black rounded-lg border-2 p-4 w-full h-2/5 mt-10"
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
