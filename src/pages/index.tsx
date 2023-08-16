"use client";

import Head from "next/head";

import HomePage from "@/components/pages/home";

export const pageWrapperId = "pageWrapperId";

export default function Home() {
  return (
    <div id={pageWrapperId}>
      <Head>
        <title>Training Support App</title>
      </Head>
      <HomePage />
    </div>
  );
}
