import React, { FC, Fragment, useCallback, useEffect, useRef } from 'react';
import { disableBodyScroll } from 'body-scroll-lock';
import { OverlayContext } from '../OverlayContext';
import { AnimatePresence } from 'framer-motion';
import { OverlayPortal } from '../OverlayPortal';
import { useExitListener } from '../../ExitListener';
import { Backdrop } from '../../Backdrop';

export interface GlobalOverlayProps {
  children?: any;
  open: boolean;
  closeOnBackdropClick?: boolean;
  hasBackdrop?: boolean;
  backdropClassName?: string;
  closeOnEscape?: boolean;
  onClose?: () => void;
}

export const GlobalOverlay: FC<GlobalOverlayProps> = ({
  open,
  hasBackdrop = true,
  closeOnEscape = true,
  closeOnBackdropClick = true,
  backdropClassName,
  children,
  onClose
}) => {
  const overlayRef = useRef<any | null>(null);

  const onBackdropClick = useCallback(() => {
    if (closeOnBackdropClick) {
      onClose?.();
    }
  }, [closeOnBackdropClick, onClose]);

  useExitListener({
    ref: overlayRef,
    open,
    onEscape: () => closeOnEscape && onClose?.()
  });

  useEffect(() => {
    if (open && children !== undefined) {
      disableBodyScroll(children);
    }
  }, [children, open]);

  return (
    <OverlayContext.Provider value={{ close: () => onClose?.() }}>
      <AnimatePresence>
        {open && (
          <OverlayPortal ref={overlayRef}>
            {({ overlayIndex, portalIndex }) => (
              <Fragment>
                {hasBackdrop && (
                  <Backdrop
                    zIndex={overlayIndex as number}
                    portalIndex={portalIndex as number}
                    onClick={onBackdropClick}
                    className={backdropClassName}
                  />
                )}
                {children({ overlayIndex, portalIndex })}
              </Fragment>
            )}
          </OverlayPortal>
        )}
      </AnimatePresence>
    </OverlayContext.Provider>
  );
};
