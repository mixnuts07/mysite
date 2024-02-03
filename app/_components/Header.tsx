import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex z-10 max-w-5xl w-full items-center justify-center mt-10 font-bold underline">
      <div className="flex gap-5">
        <Link href="/">
          <h1>home</h1>
        </Link>
        <Link href="/products">
          <h1>products</h1>
        </Link>
        <Link href="/blog">
          <h1>blog</h1>
        </Link>
        <Link href="https://twitter.com/mixed_nuts_nuts">
          <h1>X</h1>
        </Link>
        <Link href="https://github.com/mixnuts07">
          <h1>Github</h1>
        </Link>
      </div>
    </div>
  );
}
