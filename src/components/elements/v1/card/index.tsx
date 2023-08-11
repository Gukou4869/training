import type { CSSProperties, FC } from "react";
import React from "react";

import styles from "./Card.module.scss";

export interface CardProps {
  children?: React.ReactNode;
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
}

const Card: FC<CardProps> = (props) => {
  const { children, height = "10rem", width = "10rem" } = props;

  return (
    <div aria-label="card" className={styles.card} style={{ height, width }}>
      {children}
    </div>
  );
};

export default Card;
