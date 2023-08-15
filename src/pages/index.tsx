"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import Head from "next/head";

import Button from "@/components/elements/v1/button";
import LoginModal from "@/components/elements/v1/loginModal";
import { modalPortalId } from "@/components/elements/v1/modal/ModalPortal";
import Header from "@/components/layouts/header";
import { signIn } from "@/lib/firebase/utils/auth";

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

export const pageWrapperId = "pageWrapperId";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id={pageWrapperId}>
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
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          text="Login"
        />
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
      <LoginModal
        isOpen={isOpen}
        onModalClose={() => {
          setIsOpen(false);
        }}
        onSubmit={signIn}
      />
      <div aria-hidden id={modalPortalId} />
    </div>
  );
}
