import type { FC } from "react";
import React from "react";

import Form from "../form";
import { Modal } from "../modal";

import styles from "./LoginModal.module.scss";

export interface LoginModalProps {
  isOpen: boolean;
  onModalClose: () => void;
  onSubmit: (email: string, password: string) => void;
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onModalClose, onSubmit } = props;

  return (
    <Modal className={styles.loginModal} isOpen={isOpen} onModalClose={onModalClose}>
      <Form onSubmit={onSubmit} />
    </Modal>
  );
};

export default LoginModal;
