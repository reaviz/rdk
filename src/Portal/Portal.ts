import {
  useImperativeHandle,
  forwardRef,
  FC,
  useLayoutEffect,
  useRef,
  Ref,
  useEffect
} from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  element?: string;
  className?: string;
  onMount?: () => void;
  onUnmount?: () => void;
}

const useUnmount = (fn) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useLayoutEffect(() => () => fnRef.current(), []);
};

export const Portal: FC<PortalProps & { ref?: Ref<HTMLElement> }> = forwardRef(
  (
    {
      children,
      className,
      element = 'div',
      onMount = () => undefined,
      onUnmount = () => undefined
    },
    ref
  ) => {
    const elementRef = useRef<HTMLElement>(document.createElement(element));
    const mounted = useRef<boolean>(false);

    useEffect(() => {
      if (className) {
        elementRef.current.setAttribute('class', className);
      }
    }, [className]);

    useLayoutEffect(() => {
      onMount?.();
    }, []);

    useUnmount(() => {
      onUnmount?.();
      document.body.removeChild(elementRef.current);
    });

    if (!mounted.current) {
      mounted.current = true;
      document.body.appendChild(elementRef.current);
    }

    const portal = createPortal(children, elementRef.current);

    useImperativeHandle(ref, () => elementRef.current);

    return portal;
  }
);
