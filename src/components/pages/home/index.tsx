import { useState } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";

import LoginModal from "@/components/elements/v1/loginModal";
import { signIn } from "@/lib/firebase/utils/auth";
import { sleep } from "@/lib/sleep";

import type { Variants } from "framer-motion";

const headingVariants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 50,
  },
};

const arrowVariants: Variants = {
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
    },
    x: 0,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 10,
  },
  open: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    x: 10,
    y: 0,
  },
};

export default function HomePage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [arrowAnimate, setArrowAnimate] = useState(false);

  const handleOnSubmitForm = async (email: string, password: string) => {
    const { error, result } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };

  return (
    <main
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <motion.h1
        animate="animate"
        initial="initial"
        transition={{
          duration: 1,
        }}
        variants={headingVariants}
      >
        Support Your Training
      </motion.h1>
      <motion.div
        animate={arrowAnimate ? "open" : "animate"}
        initial="initial"
        style={{ height: "2.5rem" }}
        transition={{
          duration: 1,
        }}
        variants={arrowVariants}
      >
        <AiOutlineArrowRight
          onClick={async () => {
            setArrowAnimate(true);
            await sleep(100);
            setIsOpen(true);
          }}
          size="2.5rem"
          style={{ cursor: "pointer" }}
        />
      </motion.div>
      <LoginModal
        isOpen={isOpen}
        onModalClose={() => {
          setIsOpen(false);
          setArrowAnimate(false);
        }}
        onSubmit={handleOnSubmitForm}
      />
    </main>
  );
}
