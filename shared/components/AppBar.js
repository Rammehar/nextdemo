import React from "react";
import Link from "next/link";

const AppBar = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <br />
    </>
  );
};

export default AppBar;
