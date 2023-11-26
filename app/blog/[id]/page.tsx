"use client";
import { fetchEntry } from "@/contentful";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    fetchEntry(params.id)
      .then((entry) => {
        setTitle(String(entry.fields.title || ""));
        console.log(entry.fields);
        // setBody(entry.fields.body.content[0]?.content[0].value || "");

        console.log(entry);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="mt-10">
      <h1>{title}</h1>
      {/* <h1 className="mt-10">{body}</h1> */}
    </div>
  );
}
