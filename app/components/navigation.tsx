import React from "react";
import Link from "next/link";
const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">About</Link>
          <Link href="/">Home</Link>
          <Link href={`/products/1`}>Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
