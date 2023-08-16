"use client";

import Head from "next/head";

import { modalPortalId } from "@/components/elements/v1/modal/ModalPortal";
import { AuthContextProvider } from "@/components/functional/authProvider/AuthProvider";
import HomePage from "@/components/pages/home";

export const pageWrapperId = "pageWrapperId";

export default function Home() {
  return (
    <div id={pageWrapperId}>
      <Head>
        <title>Training Support App</title>
      </Head>
      <AuthContextProvider>
        <HomePage />
      </AuthContextProvider>
      <div aria-hidden id={modalPortalId} />
    </div>
  );
}
