"use client";

import Head from "next/head";

import Header from "@/components/layouts/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Training Support App</title>
      </Head>
      <main
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Header />
        <h1>Support Your Training</h1>
      </main>
    </div>
  );
}
