import React, {
  FC,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { useId } from '../../utils/useId';
import { Portal } from '../../Portal';

// NOTE: This should not be used by external consumers.
export const portals: string[] = [];

const START_INDEX = 990;

export interface OverlayPortalRef {
  ref?: Ref<HTMLElement>;
}

export interface OverlayPortalMountEvent {
  overlayIndex: number;
  portalIndex: number;
  portalId: string;
  backdropIndex: number;
}

export interface OverlayPortalProps {
  appendToBody?: boolean;
  className?: string;
  id?: string;
  children: (props: OverlayPortalMountEvent) => any;
  onMount?: (event: OverlayPortalMountEvent) => void;
  onUnmount?: () => void;
}

export const OverlayPortal: FC<
  OverlayPortalProps & OverlayPortalRef
> = forwardRef(
  ({ className, children, onMount, onUnmount, appendToBody, id }, ref) => {
    let portalId = useId(id);

    const [portalIndex, setPortalIndex] = useState<number | null>(null);
    const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
    const portalRef = useRef<any | null>(null);

    useImperativeHandle(ref, () => portalRef.current);

    return (
      <Portal
        className={className}
        ref={portalRef}
        appendToBody={appendToBody}
        onMount={() => {
          portals.push(portalId);

          let pidx = portals.indexOf(portalId);
          setPortalIndex(pidx);

          const overlayIdx = START_INDEX + pidx * 2 + 1;
          setOverlayIndex(overlayIdx);

          onMount?.({
            portalId,
            overlayIndex: overlayIdx,
            portalIndex: pidx,
            backdropIndex: overlayIdx
          });
        }}
        onUnmount={() => {
          onUnmount?.();
          portals.splice(portals.indexOf(portalId), 1);
          setPortalIndex(null);
          setOverlayIndex(null);
        }}
      >
        {children({
          overlayIndex: overlayIndex as number,
          portalIndex: portalIndex as number,
          backdropIndex: overlayIndex as number,
          portalId
        })}
      </Portal>
    );
  }
);

OverlayPortal.defaultProps = {
  appendToBody: true
};
