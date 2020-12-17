import React, { FC, forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react';
import { useId } from '../../utils/useId';
import { Portal } from '../../Portal';

const portals: string[] = [];
const START_INDEX = 990;

export interface OverlayPortalRef {
  ref?: Ref<HTMLElement>;
}

export interface OverlayPortalProps {
  appendToBody?: boolean;
  children: (props: {
    overlayIndex: number | null;
    portalIndex: number | null;
    backdropIndex: number | null;
  }) => any;
  onMount?: () => void;
  onUnmount?: () => void;
}

export const OverlayPortal: FC<OverlayPortalProps & OverlayPortalRef> = forwardRef(
  (
    {
      children,
      onMount,
      onUnmount,
      appendToBody = true
    },
    ref
  ) =>
{
  const id = useId();
  const [portalIndex, setPortalIndex] = useState<number | null>(null);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
  const portalRef = useRef<any | null>(null);

  useImperativeHandle(ref, () => portalRef.current);

  return (
    <Portal
      ref={portalRef}
      appendToBody={appendToBody}
      onMount={() => {
        portals.push(id);

        let pidx = portals.indexOf(id);
        if (pidx === -1) {
          pidx = 0;
        }

        setPortalIndex(pidx);
        setOverlayIndex(START_INDEX + pidx * 2 + 1);
        onMount?.();
      }}
      onUnmount={() => {
        onUnmount?.();
        portals.splice(portals.indexOf(id), 1);
        setPortalIndex(null);
        setOverlayIndex(null);
      }}
    >
      {children({ overlayIndex, portalIndex, backdropIndex: overlayIndex })}
    </Portal>
  )
});
