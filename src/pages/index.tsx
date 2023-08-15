"use client";

import { motion } from "framer-motion";
import Head from "next/head";

import Header from "@/components/layouts/header";

import type { Variants } from "framer-motion";

const HeadingVariants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 50,
  },
};

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

        <motion.h1
          animate="animate"
          initial="initial"
          transition={{
            duration: 1,
          }}
          variants={HeadingVariants}
        >
          Support Your Training
        </motion.h1>
      </main>
    </div>
  );
}
