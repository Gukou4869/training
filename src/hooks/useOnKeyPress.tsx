import { useCallback, useEffect, useRef } from "react";

/**
 * Hook that helps to detect if an specific key in the keyboard has being pressed
 * @param targetKey - Keyboard key that will trigger the callback
 * @param onKeyPress - Callback for the keydown event
 * @param onKeyUp - Callback for the keyup event
 * @param disable - disables the functionality by not attaching any listener
 * @returns - `ref` for an element if needed, if it's not needed the listener will be attached to window
 */
const useOnKeyPress = (
  targetKey: string,
  onKeyPress: (event: KeyboardEvent) => void,
  onKeyUp?: ((event: KeyboardEvent) => void) | null,
  disable?: boolean
) => {
  if (targetKey.split(" ").length > 1) {
    console.warn(
      "useOnKeyPress: Target key must be one word/character and should match the `key` name in the KeyboardEvent: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values"
    );
  }

  const elementRef = useRef<HTMLElement>(null);

  const eventHandler = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === targetKey) {
        if (event.type === "keydown") {
          onKeyPress(event);
        }

        if (event.type === "keyup" && onKeyUp) {
          onKeyUp(event);
        }
      }
    },
    [onKeyPress, onKeyUp, targetKey]
  );

  // init
  useEffect(() => {
    const element = elementRef.current;

    if (!disable) {
      if (element) {
        element.addEventListener("keydown", eventHandler);
        element.addEventListener("keyup", eventHandler);
      } else {
        window.addEventListener("keydown", eventHandler);
        window.addEventListener("keyup", eventHandler);
      }
    }

    // Remove event listeners on cleanup
    return () => {
      if (!disable) {
        if (element) {
          element.removeEventListener("keydown", eventHandler);
          element.removeEventListener("keyup", eventHandler);
        } else {
          window.removeEventListener("keydown", eventHandler);
          window.removeEventListener("keyup", eventHandler);
        }
      }
    };
  }, [eventHandler, disable]);

  return elementRef;
};

export default useOnKeyPress;
