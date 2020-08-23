import {
  useImperativeHandle,
  forwardRef,
  FC,
  useLayoutEffect,
  useRef,
  Ref
} from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  element?: string;
  onMount?: () => void;
  onUnmount?: () => void;
}

export const Portal: FC<PortalProps & { ref?: Ref<HTMLElement> }> = forwardRef(
  (
    {
      children,
      element = 'div',
      onMount = () => undefined,
      onUnmount = () => undefined
    },
    ref
  ) => {
    const elementRef = useRef<HTMLElement>(document.createElement(element));
    const mounted = useRef<boolean>(false);

    useLayoutEffect(() => {
      onMount?.();
      return () => {
        onUnmount?.();
        document.body.removeChild(elementRef.current);
      };
    }, []);

    if (!mounted.current) {
      mounted.current = true;
      document.body.appendChild(elementRef.current);
    }

    const portal = createPortal(children, elementRef.current);

    useImperativeHandle(ref, () => elementRef.current);

    return portal;
  }
);
