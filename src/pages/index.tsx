"use client";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Training Support App</title>
      </Head>
      <main>
        <Link href={"/login"}>Login Page!!!</Link>
      </main>
    </div>
  );
}
