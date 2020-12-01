import React, { FC, RefObject, useRef, useCallback } from 'react';
import { PortalProps, Portal } from './Portal';

type PortalRestult = [FC<PortalProps>, RefObject<HTMLElement>];

export const usePortal = (props: PortalProps = {}) => {
  const ref = useRef<HTMLElement | null>(null);

  const Component = useCallback(({ children }) =>
    <Portal {...props} ref={ref}>{children}</Portal>, []);

  return [Component, ref] as PortalRestult;
 };
