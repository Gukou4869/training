import type { FC } from "react";
import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import styles from "./Loading.module.scss";

import type { Variants } from "framer-motion";

const loadingVariants: Variants = {
  animate: {
    opacity: 1,
  },
  exit: {
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
    x: "-100vw",
  },
};

interface LoadingProps {
  isLoading?: boolean;
}

const Loading: FC<LoadingProps> = (props) => {
  const { isLoading } = props;
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    let dotString = "";
    for (let i = 0; i < dots; i++) {
      dotString += ".";
    }
    return dotString;
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          animate="animate"
          className={styles.loading}
          exit="exit"
          initial="animate"
          key="loading"
          variants={loadingVariants}
        >
          <div>
            Loading
            <span>{renderDots()}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
