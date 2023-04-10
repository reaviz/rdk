import { RefObject, useEffect } from 'react';

interface ExitListenerOptions {
  ref: RefObject<HTMLElement | null>;
  open?: boolean;
  onClickOutside?: (event: MouseEvent) => void;
  onEscape?: (event: KeyboardEvent) => void;
}

export const useExitListener = ({
  ref,
  open = true,
  onClickOutside,
  onEscape
}: ExitListenerOptions) => {
  useEffect(() => {
    const handleClick = event => {
      const el = ref.current;
      if (!el?.contains(event.target) && event.which !== 3) {
        onClickOutside?.(event);
      }
    };

    const handleKey = event => {
      if (event.keyCode === 27) {
        onEscape?.(event);
      }
    };

    if (open) {
      if (onClickOutside) {
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);
      }

      if (handleKey) {
        document.addEventListener('keydown', handleKey);
      }
    }

    return () => {
      if (onClickOutside) {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      }

      if (handleKey) {
        document.removeEventListener('keydown', handleKey);
      }
    };
  }, [ref, onClickOutside, onEscape, open]);
};
