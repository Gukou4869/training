import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
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
    <motion.div animate={{ opacity: 1 }} className={styles.loading} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
      <div>
        Loading
        <span>{renderDots()}</span>
      </div>
    </motion.div>
  );
};

export default Loading;
