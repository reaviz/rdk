import { useState } from 'react';
import { usePortal, PortalProps } from '../../Portal';
import { useId } from '../../utils/useId';

const portals: string[] = [];
const START_INDEX = 990;

export const useOverlayPortal = (props: Partial<PortalProps> = {}) => {
  const id = useId();
  const [portalIndex, setPortalIndex] = useState<number | null>(null);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);

  const [Portal, ref] = usePortal({
    onMount: () => {
      portals.push(id);

      let pidx = portals.indexOf(id);
      if (pidx === -1) {
        pidx = 0;
      }

      setPortalIndex(pidx);
      setOverlayIndex(START_INDEX + pidx * 2 + 1);
      props.onMount?.();
    },
    onUnmount: () => {
      props.onUnmount?.();
      portals.splice(portals.indexOf(id), 1);
      setPortalIndex(null);
      setOverlayIndex(null);
    }
  });

  return {
    OverlayPortal: Portal,
    ref,
    portalIndex,
    overlayIndex
  };
};
