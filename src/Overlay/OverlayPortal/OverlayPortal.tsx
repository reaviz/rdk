import React, { FC } from 'react';
import { useOverlayPortal } from './useOverlayPortal';

export interface OverlayPortalProps {
  children?: any;
  appendToBody?: boolean;
  render?: (props: {
    zIndex: number;
    portalIndex: number;
    backdropIndex: number;
  }) => void;
  onMount?: () => void;
  onUnmount?: () => void;
}

export const OverlayPortal: FC<OverlayPortalProps> = ({
  render,
  children,
  ...rest
}) => {
  const {
    OverlayPortal: Component,
    overlayIndex,
    portalIndex
  } = useOverlayPortal(rest);
  const renderer = children || render;

  return (
    <Component {...rest}>
      {renderer({ overlayIndex, portalIndex, backdropIndex: overlayIndex })}
    </Component>
  );
};
