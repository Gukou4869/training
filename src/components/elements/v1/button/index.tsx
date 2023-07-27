import React, { FC } from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  // ここにPropsの型定義を書くことができます。
}

const Button: FC<ButtonProps> = (props) => {
  const {} = props;

  return <div className={styles.button}>{/* Component content goes here */}</div>;
};

export default Button;
