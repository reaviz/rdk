import React, { FC, Fragment, useCallback, useRef } from 'react';
import ScrollLock from 'react-scrolllock';
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
  onClose = () => undefined,
}) => {
  const overlayRef = useRef<any | null>(null);
  const onBackdropClick = useCallback(() => {
    if (closeOnBackdropClick) {
      onClose?.();
    }
  }, [closeOnBackdropClick]);

  useExitListener({
    ref: overlayRef,
    open,
    onEscape: () => closeOnEscape && onClose?.(),
  });

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
                <ScrollLock />
              </Fragment>
            )}
          </OverlayPortal>
        )}
      </AnimatePresence>
    </OverlayContext.Provider>
  );
};
