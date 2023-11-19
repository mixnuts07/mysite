"use client";
import { client } from "@/contentful";
import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    console.log(1111);
    client
      .getEntry(params.id)
      .then((entry) => {
        console.log(entry);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>page: {params.id}</h1>
      <h1>jfklsdk</h1>
    </div>
  );
}
