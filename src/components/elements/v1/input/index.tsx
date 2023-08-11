import React, { CSSProperties, FC, useState } from "react";
import styles from "./Input.module.scss";
import cx from "classnames";

export interface InputProps {
  label: String;
  type?: "text" | "email" | "password" | "tel";
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  value: string;
  placeholder?: string;
  errorMassage?: string;
  supportText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    label,
    type = "text",
    value,
    placeholder = "テキストを入力してください",
    onChange,
    width = "18.4375rem",
    height = "2em",
    supportText,
    errorMassage,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input">{label}</label>
      {supportText && <span>{supportText}</span>}
      <input
        id="input"
        style={{ width, height }}
        type={showPassword ? "text" : type}
        className={cx(styles.input, errorMassage && styles.error)}
        placeholder={isFocused ? "入力中..." : placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {type === "password" && (
        <button
          type="button"
          className={styles.passwordButton}
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? "🐵" : "🙈"}
        </button>
      )}
      {errorMassage && <span className={styles.error}>{errorMassage}</span>}
    </div>
  );
};

export default Input;
