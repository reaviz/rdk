import { useRef, useLayoutEffect, RefObject, useMemo } from 'react';
import {
  Placement as FloatingUIPlacement,
  Middleware,
  computePosition,
  flip,
  limitShift,
  shift
} from '@floating-ui/dom';

export type Placement = FloatingUIPlacement;

export type ReferenceProp =
  | ReferenceObject
  | HTMLElement
  | RefObject<HTMLElement>;

export interface ReferenceObject {
  top: number;
  left: number;
  height: number;
  width: number;
}

export interface PositionOptions {
  placement?: Placement;
  modifiers?: [Middleware];
  followCursor?: boolean;
}

export const usePosition = (
  reference: ReferenceProp,
  { followCursor, placement, modifiers }: PositionOptions = {}
) => {
  const elementRef = useRef<any | null>(null);
  const mouse = useRef<{ pageX: number; pageY: number }>({
    pageX: 0,
    pageY: 0
  });

  const popperRef = useMemo(() => {
    const refObj = reference as RefObject<HTMLElement>;
    if (refObj.current !== undefined) {
      return refObj.current;
    }

    const refElement = reference as HTMLElement;
    if (followCursor) {
      return {
        getBoundingClientRect: () => ({
          top: mouse.current.pageY,
          right: mouse.current.pageX,
          bottom: mouse.current.pageY,
          left: mouse.current.pageX,
          width: 0,
          height: 0
        }),
        clientWidth: 0,
        clientHeight: 0
      };
    } else if (refElement && !refElement.getBoundingClientRect) {
      const { top, left, width, height } = reference as ReferenceObject;

      return {
        getBoundingClientRect: () => ({
          top,
          left,
          width,
          bottom: top - height,
          right: left - width,
          height
        }),
        clientWidth: width,
        clientHeight: height
      };
    }

    return refElement;
  }, [followCursor, (reference as RefObject<HTMLElement>)?.current, mouse]);

  useLayoutEffect(() => {
    let rqf;

    const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
      mouse.current = { pageX, pageY };
    };

    const onWindowScroll = () => {
      rqf = requestAnimationFrame(() => {});
    };

    if (elementRef.current && popperRef) {
      Object.assign(elementRef.current.style, {
        width: 'max-content',
        position: 'absolute',
        top: 0,
        left: 0
      });

      //@ts-ignore
      computePosition(popperRef, elementRef.current, {
        placement: placement || 'top',
        middleware: modifiers || [flip(), shift({ limiter: limitShift() })]
      }).then(({ x, y }) => {
        Object.assign(elementRef.current.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });

      window.addEventListener('scroll', onWindowScroll);

      if (followCursor) {
        window.addEventListener('mousemove', onMouseMove);
      }
    }

    return () => {
      if (!elementRef.current) {
        cancelAnimationFrame(rqf);
        window.removeEventListener('scroll', onWindowScroll);

        if (followCursor) {
          window.removeEventListener('mousemove', onMouseMove);
        }
      }
    };
  }, [elementRef.current]);

  return elementRef;
};
