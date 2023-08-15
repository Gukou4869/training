import { useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import { createPortal } from "react-dom";

export const modalPortalId = "modalsRoot";

interface ModalPortalProps {
  children?: ReactNode;
  isOpen?: boolean;
}

const ModalPortal: FC<ModalPortalProps> = (props) => {
  const { children, isOpen } = props;

  const [domElement, setDomElement] = useState<Element | null>(null);

  useEffect(() => {
    setDomElement(document.getElementById(modalPortalId));
  }, []);

  if (!domElement) {
    return null;
  }

  domElement.ariaHidden = isOpen ? "false" : "true";

  return createPortal(children, domElement);
};

export default ModalPortal;
