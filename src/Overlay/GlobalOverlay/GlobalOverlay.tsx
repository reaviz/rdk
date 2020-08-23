import React, { FC, useEffect } from 'react';
import { GlobalOverlayCommon, useGlobalOverlay } from './useGlobalOverlay';

export interface GlobalOverlayProps extends GlobalOverlayCommon {
  open: boolean;
  children?: any;
  render?: (props: { overlayIndex: number }) => void;
  onClose?: () => void;
}

export const GlobalOverlay: FC<GlobalOverlayProps> = ({
  children,
  render,
  open,
  onClose = () => undefined,
  ...rest
}) => {
  const {
    GlobalOverlay: Component,
    overlayIndex,
    portalIndex,
    setOpen,
  } = useGlobalOverlay({ onClose, ...rest });
  const renderFn = children || render;

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return <Component>{() => renderFn({ overlayIndex, portalIndex })}</Component>;
};
