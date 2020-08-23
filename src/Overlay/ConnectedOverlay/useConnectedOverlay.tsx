import React, { useCallback, useState, RefObject } from 'react';
import { usePosition, ReferenceProp, Placement } from '../../Position';
import { AnimatePresence } from 'framer-motion';
import { useExitListener } from '../../ExitListener';
import { useOverlayPortal } from '../OverlayPortal';
import { OverlayContext } from '../OverlayContext';

export interface ConnectedOverlayHookOptions extends ConnectedOverlayCommon {
  closeOnBodyClick?: boolean;
  closeOnEscape?: boolean;
  appendToBody?: boolean;
}

export interface ConnectedOverlayCommon {
  className?: any;
  modifiers?: any;
  followCursor?: boolean;
  placement?: Placement;
  style?: any;
}

export const useConnectedOverlay = (
  triggerRef: ReferenceProp,
  options?: ConnectedOverlayHookOptions
) => {
  const {
    closeOnBodyClick = true,
    closeOnEscape = true,
    style = {},
    className,
    appendToBody = true,
    followCursor,
    modifiers,
    placement = 'bottom'
  } = options || {};

  const [open, setOpen] = useState<boolean>(false);
  const {
    OverlayPortal,
    ref,
    overlayIndex,
    portalIndex
  } = useOverlayPortal();

  const [positionRef, innerPopperRef] = usePosition(triggerRef, {
    followCursor,
    modifiers,
    placement
  });

  useExitListener(ref, {
    onClickOutside: event => {
      if (closeOnBodyClick) {
        let ref: HTMLElement | null = null;
        if ((triggerRef as RefObject<HTMLElement>).current) {
          ref = (triggerRef as RefObject<HTMLElement>)
            .current as HTMLElement;
        } else if ((triggerRef as HTMLElement).contains !== undefined) {
          ref = triggerRef as HTMLElement;
        }

        if (ref && !ref.contains(event.target as any)) {
          setOpen(false);
        }
      }
    },
    onEscape: () => closeOnEscape && setOpen(false)
  });

  const Component = useCallback(
    ({ children }) => (
      <OverlayContext.Provider value={{ close: () => setOpen(false) }}>
        <AnimatePresence>
          {open && (
            appendToBody ? (
              <OverlayPortal key={`co-${overlayIndex}`}>
                <div
                  ref={positionRef}
                  style={{ zIndex: overlayIndex as number, ...(style || {}) }}
                  className={className}
                >
                  {children({ overlayIndex, portalIndex })}
                </div>
              </OverlayPortal>
            ) : (
              <div
                key={`co-${overlayIndex}`}
                ref={positionRef}
                style={{ zIndex: overlayIndex as number, ...(style || {}) }}
                className={className}
              >
                {children({ overlayIndex, portalIndex })}
              </div>
            )
          )}
        </AnimatePresence>
      </OverlayContext.Provider>
    ), [open, overlayIndex, portalIndex]);

  return {
    overlayIndex: overlayIndex,
    portalIndex: portalIndex,
    isOpen: open,
    setOpen,
    ref,
    popperRef: innerPopperRef,
    ConnectedOverlay: Component
  };
};
