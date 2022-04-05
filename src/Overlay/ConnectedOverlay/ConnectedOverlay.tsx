import React, {
  FC,
  useRef,
  useEffect,
  Fragment,
  forwardRef,
  Ref,
  useImperativeHandle
} from 'react';
import { TriggerTypes, OverlayTrigger } from '../OverlayTrigger';
import { Placement, ReferenceProp } from '../../Position';
import { AnimatePresence } from 'framer-motion';
import { OverlayContext } from '../../Overlay/OverlayContext';
import {
  ConnectedOverlayContent,
  ConnectedOverlayContentRef
} from './ConnectedOverlayContent';

export interface OverlayEvent {
  type: TriggerTypes;
  nativeEvent: any;
}

export interface ConnectedOverlayProps {
  open: boolean;
  reference?: ReferenceProp;
  children?: any;
  content: any;
  trigger?: TriggerTypes[] | TriggerTypes;
  triggerElement?: any;
  triggerClassName?: string;
  portalClassName?: string;
  closeOnBodyClick?: boolean;
  closeOnEscape?: boolean;
  appendToBody?: boolean;
  elementType?: string;
  modifiers?: any;
  followCursor?: boolean;
  placement?: Placement;
  onOpen?: (event?: any) => void;
  onClose?: (event?: any) => void;
}

export const ConnectedOverlay: FC<
  ConnectedOverlayProps & {
    ref?: Ref<ConnectedOverlayContentRef>;
  }
> = forwardRef(
  (
    {
      reference,
      children,
      open,
      content,
      triggerElement,
      triggerClassName,
      trigger = 'click' as TriggerTypes,
      onOpen,
      onClose,
      ...rest
    },
    ref
  ) => {
    const mounted = useRef<boolean>(false);
    const overlayTriggerRef = useRef<any | null>(null);
    const contentRef = useRef<any | null>(null);
    const triggerRef = reference || overlayTriggerRef;

    useImperativeHandle(ref, () => ({
      updatePosition: () => {
        contentRef.current?.updatePosition();
      }
    }));

    useEffect(() => {
      if (mounted.current) {
        if (!open) {
          onClose?.();
        } else {
          onOpen?.();
        }
      } else {
        mounted.current = true;
      }
    }, [open]);

    return (
      <OverlayContext.Provider value={{ close: () => onClose?.() }}>
        {children && (
          <Fragment>
            {trigger ? (
              <OverlayTrigger
                elementType={triggerElement}
                ref={overlayTriggerRef}
                className={triggerClassName}
                trigger={trigger}
                onOpen={onOpen}
                onClose={onClose}
              >
                {children}
              </OverlayTrigger>
            ) : (
              children
            )}
          </Fragment>
        )}
        <AnimatePresence>
          {open && (
            <ConnectedOverlayContent
              {...rest}
              ref={contentRef}
              triggerRef={triggerRef}
              onClose={onClose}
            >
              {content}
            </ConnectedOverlayContent>
          )}
        </AnimatePresence>
      </OverlayContext.Provider>
    );
  }
);
