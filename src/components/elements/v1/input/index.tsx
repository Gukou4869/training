import React, { useState } from "react";
import type { CSSProperties, ForwardRefRenderFunction } from "react";

import cx from "classnames";

import styles from "./Input.module.scss";

export interface InputProps {
  className?: string;
  errorMassage?: string;
  height?: CSSProperties["height"];
  id: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  supportText?: string;
  type?: "text" | "email" | "password" | "tel";
  value?: string;
  width?: CSSProperties["width"];
}

const Input: ForwardRefRenderFunction<string | null, InputProps> = (props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    className,
    errorMassage,
    height = "2rem",
    id,
    label,
    onChange,
    placeholder = "テキストを入力してください",
    required = false,
    supportText,
    type = "text",
    value,
    width = "18.4375rem",
  } = props;

  const customWidth = {
    "--input-width": width,
  } as CSSProperties;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Refのcurrentプロパティに入力の値をセット
    if (ref && typeof ref === "object" && ref.current !== null) {
      ref.current = e.target.value;
      console.log(ref.current, "❤️");
    }

    onChange && onChange(e);
  };

  return (
    <div className={cx(styles.inputContainer, className)} style={customWidth}>
      <label htmlFor={id}>
        {label}
        {required && <span className={styles.required}>※</span>}
      </label>
      {supportText && <span>{supportText}</span>}
      <input
        className={cx(styles.input, errorMassage && styles.error)}
        id="input"
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        placeholder={isFocused ? "入力中..." : placeholder}
        style={{ height }}
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

export default React.forwardRef(Input);
