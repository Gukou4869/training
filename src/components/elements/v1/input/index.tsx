import React, { FC } from "react";
import styles from "./Input.module.scss";

export interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  const { value, placeholder = "ここにテキストを入力してください", onChange } = props;

  return <input type="text" className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
