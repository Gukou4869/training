import type { FC } from "react";
import React from "react";

import styles from "./Header.module.scss";

export interface HeaderProps {
  // you can write prop here
}

const Header: FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <div className={styles.header}>
      <section className={styles.loginSection}>
        <button type="button">ログイン</button>
      </section>
    </div>
  );
};

export default Header;
