import React from "react";

export default function Header() {
  return (
    <div className="flex gap-10">
      <div className="flex gap-5">
        <h1>Home</h1>
        <h1>Products</h1>
        <h1>Blog</h1>
      </div>
      <div className="flex gap-5">
        <h1>X</h1>
        <h1>Github</h1>
        <h1>LinkedIn</h1>
      </div>
    </div>
  );
}
