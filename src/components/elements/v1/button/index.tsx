import React, { forwardRef } from "react";

import cx from "classnames";

import styles from "./Button.module.scss";

export type ButtonType = "primary" | "secondary" | "tertiary";
export interface ButtonProps {
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * onClick event function.
   */
  onClick?: () => void;
  /**
   * The text of the component.
   */
  text: React.ReactNode;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  type?: ButtonType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const { className, disabled, onClick, text, type = "primary" } = props;

  return (
    <button className={cx(className, styles.button, styles[type])} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
