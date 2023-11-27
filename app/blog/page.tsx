"use client";
import {
  IMySite,
  IMySiteFields,
  TypeMySiteFields,
} from "@/@types/generated/contentful";
import { fetchEntries } from "@/contentful";
import { Entry, EntryCollection } from "contentful";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface Props {
  posts: EntryCollection<TypeMySiteFields>;
}
export default function Blog() {
  const [entries, setEntries] = useState<TypeMySiteFields[]>([]);
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
      {entries.map((entry: TypeMySiteFields) => {
        const dateOnly = entry.sys.createdAt.split("T")[0];
        return (
          <div
            key={entry.sys.id}
            className=" border-black rounded-lg border-2 p-4 w-full h-2/5 mt-10"
          >
            <Link href={`blog/${entry.sys.id}`}>
              <h2>{entry.title?.toString()}</h2>
              <h5>{dateOnly}</h5>
              <h5>{entry.body?.content.toString()}</h5>
              <h5>{entry.fields}</h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
