import { RefObject, useLayoutEffect } from 'react';

interface ExitListenerOptions {
  onClickOutside?: (event: MouseEvent) => void;
  onEscape?: (event: KeyboardEvent) => void;
}

export const useExitListener = (
  ref: RefObject<HTMLElement | null>,
  options: ExitListenerOptions
) => {
  useLayoutEffect(() => {
    const handleClick = event => {
      const el = ref.current;
      if (!el?.contains(event.target) && event.which !== 3) {
        options?.onClickOutside!(event);
      }
    };

    const handleKey = event => {
      if (event.keyCode === 27) {
        options?.onEscape!(event);
      }
    };

    if (options.onClickOutside) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);
    }

    if (handleKey) {
      document.addEventListener('keydown', handleKey);
    }

    return () => {
      if (options.onClickOutside) {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      }

      if (handleKey) {
        document.removeEventListener('keydown', handleKey);
      }
    };
  }, [ref, options]);
};
