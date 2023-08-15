import type { CSSProperties, FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import cx from "classnames";

import useOnKeyPress from "@/hooks/useOnKeyPress";
import { sleep } from "@/lib/sleep";
import { pageWrapperId } from "@/pages";

import styles from "./Modal.module.scss";
import ModalPortal from "./ModalPortal";
import { type ModalComponentProps } from "./types";

const mountingTimeout = 350;

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const {
    children,
    className,
    closeOnEsc = true,
    isOpen,
    modalHeight,
    modalWidth = "75%",
    onModalClose,
    onModalOpen,
    onRequestClose,
  } = props;
  const modalWrapRef = useRef<HTMLDivElement>(null);
  const pageWrapperRef = useRef<HTMLElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    pageWrapperRef.current = document.getElementById(pageWrapperId);
  }, []);

  const handleAnimatedUnmount = useCallback(async () => {
    setIsClosing(true);
    await sleep(mountingTimeout * 2);

    if (onRequestClose) {
      onRequestClose();
    }

    setIsClosing(false);

    if (onModalClose) {
      onModalClose();
    }
  }, [onModalClose, onRequestClose]);

  useOnKeyPress("Escape", handleAnimatedUnmount, null, !closeOnEsc);

  const styleVars = {
    "--animation-timeout": `${mountingTimeout}ms`,
    "--modal-height": modalHeight,
    "--modal-width": modalWidth,
  } as CSSProperties;

  useEffect(() => {
    if (isOpen && pageWrapperRef.current) {
      pageWrapperRef.current.ariaHidden = "true";
    } else if (pageWrapperRef.current) {
      pageWrapperRef.current.ariaHidden = null;
    }
  }, [isOpen]);

  return (
    <ModalPortal isOpen={isOpen}>
      {isOpen && (
        <div
          aria-modal="true"
          className={cx(styles.modalWrapper, isClosing && styles.closing)}
          ref={modalWrapRef}
          role="dialog"
          style={styleVars}
        >
          <button
            aria-hidden
            className={styles.modalBackdrop}
            onClick={async () => {
              handleAnimatedUnmount();
            }}
            tabIndex={-1}
            type="button"
          />
          <div className={cx(styles.modalMainBody, !modalHeight && styles.withAspect, className)}>
            <div
              onAnimationEnd={(event) => {
                if (isOpen) {
                  if (modalWrapRef.current?.ariaModal && onModalOpen) {
                    onModalOpen(event, modalWrapRef.current);
                  }
                }
              }}
              style={{
                alignItems: "center",
                display: "flex",
                height: modalHeight ? "auto" : "100%",
                justifyContent: "center",
                zIndex: "200",
              }}
            >
              {typeof children === "function" ? children({ closeModal: handleAnimatedUnmount }) : children}
            </div>
          </div>
        </div>
      )}
    </ModalPortal>
  );
};

export default ModalComponent;
