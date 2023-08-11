import type { FC } from "react";
import React, { useRef } from "react";

import Button from "../button";
import Card from "../card";
import Input from "../input";

import styles from "./Form.module.scss";

export interface FormProps {
  // you can write prop here
  onSubmit: (email: string, password: string) => void;
}

const Form: FC<FormProps> = (props) => {
  const { onSubmit } = props;

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(emailRef.current, passwordRef.current);
  };

  return (
    <Card height="30em" width="30rem">
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          className={styles.input}
          id="email"
          label="email"
          placeholder="example@example.com"
          ref={emailRef}
          required
          type="email"
        />
        <Input
          className={styles.input}
          id="password"
          label="password"
          onChange={() => {}}
          ref={passwordRef}
          required
          type="password"
        />
        <Button text={"Sign up"} />
      </form>
    </Card>
  );
};

export default Form;
