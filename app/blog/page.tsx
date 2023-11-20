"use client";
import { fetchEntries } from "@/contentful";
import { Entry, EntrySkeletonType } from "contentful";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Blog() {
  const [entries, setEntries] = useState<
    Entry<EntrySkeletonType, undefined, string>[]
  >([]);
  useEffect(() => {
    fetchEntries()
      .then((res) => {
        // setEntries(res);
        console.log(res);
        setEntries(res);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      {entries.map((entry) => {
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
