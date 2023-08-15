import { type ReactNode } from "react";

export interface ModalComponentProps {
  children: ReactNode | ((functionProps: { closeModal: () => Promise<void> }) => ReactNode);

  className?: string;

  /**
   * modal will close on pressing the escape key
   */
  closeOnEsc?: boolean;

  /**
   * prop that controls the visibility of the modal
   */
  isOpen: boolean;

  /**
   * height of the modal main body, it has an aspect ratio of 16 / 9
   * if height is defined, the aspect-ratio will be removed
   */
  modalHeight?: `${number}%` | `${number}em` | "auto";

  /**
   * width of the modal main body, it has an aspect ratio of 16 / 9
   * default value is 75%
   */
  modalWidth?: `${number}%` | `${number}em`;

  /**
   * callback event that happens until the modal has completely being removed
   */
  onModalClose?: () => void;

  /**
   * callback event that happens until backdrop animation has ended
   */
  onModalOpen?: (event: React.AnimationEvent<HTMLElement>, element: HTMLDivElement) => void;

  /**
   * function that is called when the user clicks on the backdrop
   * it is mainly used to set the isOpen prop to false
   */
  onRequestClose?: () => void;
}
