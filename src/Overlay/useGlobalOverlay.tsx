import React, { useCallback, useState } from 'react';
import ScrollLock from 'react-scrolllock';
import { OverlayContext } from './OverlayContext';
import { AnimatePresence } from 'framer-motion';
import { useOverlayPortal } from './useOverlayPortal';
import { useExitListener } from '../ExitListener';
import { Backdrop } from '../Backdrop';

export interface GlobalOverlayCommon {
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
  hasBackdrop?: boolean;
  backdropClassName?: string;
}

export const useGlobalOverlay = (options?: GlobalOverlayCommon) => {
  const {
    hasBackdrop = true,
    closeOnEscape = true,
    closeOnBackdropClick = true,
    backdropClassName
  } = options || {};
  const { OverlayPortal, ref, overlayIndex, portalIndex } = useOverlayPortal();
  const [open, setOpen] = useState<boolean>(false);

  const onBackdropClick = useCallback(() => {
    if (closeOnBackdropClick) {
      setOpen(false);
    }
  }, [setOpen, closeOnBackdropClick]);

  useExitListener(ref, {
    onEscape: () => closeOnEscape && setOpen(false)
  });

  const Component = useCallback(
    ({ children }) => (
      <OverlayContext.Provider value={{ close: () => setOpen(false) }}>
        <AnimatePresence>
          {open && (
            <OverlayPortal>
              {hasBackdrop && (
                <Backdrop
                  zIndex={overlayIndex as number}
                  portalIndex={portalIndex as number}
                  visible={open}
                  onClick={onBackdropClick}
                  className={backdropClassName}
                />
              )}
              {children()}
              <ScrollLock />
            </OverlayPortal>
          )}
        </AnimatePresence>
      </OverlayContext.Provider>
    ),
    [open, overlayIndex, portalIndex, backdropClassName, onBackdropClick]
  );

  return {
    overlayIndex,
    portalIndex,
    isOpen: open,
    setOpen,
    ref,
    GlobalOverlay: Component
  };
};
