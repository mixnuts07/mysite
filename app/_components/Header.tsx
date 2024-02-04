import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className='fixed top-0 z-10 py-8 bg-gray-100 shadow-xl min-w-full'>
      <div className="flex items-center justify-center font-bold underline">
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
    </header>
  );
}
