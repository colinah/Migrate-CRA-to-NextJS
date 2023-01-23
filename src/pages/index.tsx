import * as React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <h1>Home Page</h1>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <Link href="/settings">settings</Link>
        <Link href="/stocks">stocks</Link>
        <Link href="/nested">nested</Link>
      </div>
    </div>
  );
}
