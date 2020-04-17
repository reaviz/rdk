import React, { FC, useEffect, useRef } from 'react';
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
    isOpen
  } = useGlobalOverlay(rest);
  const mounted = useRef<boolean>(false);
  const renderFn = children || render;

  useEffect(() => {
    setOpen(open);
  }, [open]);

  useEffect(() => {
    if (mounted.current) {
      if (!isOpen) {
        onClose && onClose();
      }
    } else {
      mounted.current = true;
    }
  }, [isOpen]);

  return <Component>{() => renderFn({ overlayIndex, portalIndex })}</Component>;
};
