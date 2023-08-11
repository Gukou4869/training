import React, { useState } from "react";
import type { CSSProperties, FC } from "react";

import cx from "classnames";

import styles from "./Input.module.scss";

export interface InputProps {
  errorMassage?: string;
  height?: CSSProperties["height"];
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  supportText?: string;
  type?: "text" | "email" | "password" | "tel";
  value: string;
  width?: CSSProperties["width"];
}

const Input: FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    errorMassage,
    height = "2em",
    label,
    onChange,
    placeholder = "テキストを入力してください",
    supportText,
    type = "text",
    value,
    width = "18.4375rem",
  } = props;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input">{label}</label>
      {supportText && <span>{supportText}</span>}
      <input
        className={cx(styles.input, errorMassage && styles.error)}
        id="input"
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        placeholder={isFocused ? "入力中..." : placeholder}
        style={{ height, width }}
        type={showPassword ? "text" : type}
        value={value}
      />
      {type === "password" && (
        <button
          className={styles.passwordButton}
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
          type="button"
        >
          {showPassword ? "🐵" : "🙈"}
        </button>
      )}
      {errorMassage && <span className={styles.error}>{errorMassage}</span>}
    </div>
  );
};

export default Input;
