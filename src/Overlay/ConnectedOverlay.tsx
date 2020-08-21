import React, {
  FC,
  useRef,
  useEffect,
  Fragment,
  forwardRef,
  Ref,
  useImperativeHandle
} from 'react';
import { TriggerTypes, OverlayTrigger } from './OverlayTrigger';
import { ReferenceProp } from '../Position';
import {
  ConnectedOverlayHookOptions,
  useConnectedOverlay
} from './useConnectedOverlay';

export interface OverlayEvent {
  type: TriggerTypes;
  nativeEvent: any;
}

export interface ConnectedOverlayProps extends ConnectedOverlayHookOptions {
  open: boolean;
  reference?: ReferenceProp;
  content: any;
  trigger?: TriggerTypes[] | TriggerTypes;
  onActivate?: (event?: OverlayEvent) => void;
  onDeactivate?: (event?: OverlayEvent) => void;
}

export interface ConnectedOverlayRef {
  updatePosition: () => void;
}

export const ConnectedOverlay: FC<ConnectedOverlayProps & {
  ref?: Ref<ConnectedOverlayRef>;
}> = forwardRef(
  (
    {
      reference,
      children,
      open,
      content,
      trigger = 'click' as TriggerTypes,
      onActivate,
      onDeactivate,
      ...rest
    },
    ref
  ) => {
    const mounted = useRef<boolean>(false);
    const overlayTriggerRef = useRef<HTMLSpanElement | null>(null);
    const triggerRef = reference || overlayTriggerRef;
    const {
      ConnectedOverlay: Component,
      setOpen,
      isOpen,
      popperRef
    } = useConnectedOverlay(triggerRef, rest);

    useImperativeHandle(ref, () => ({
      updatePosition: () => {
        popperRef?.current?.scheduleUpdate();
      }
    }));

    useEffect(() => {
      setOpen(open);
    }, [open]);

    useEffect(() => {
      if (mounted.current) {
        if (!isOpen) {
          onDeactivate && onDeactivate();
        } else {
          onActivate && onActivate();
        }
      } else {
        mounted.current = true;
      }
    }, [isOpen]);

    return (
      <Fragment>
        {children &&
          (trigger ? (
            <OverlayTrigger
              ref={overlayTriggerRef}
              trigger={trigger}
              onActivate={event => {
                onActivate && onActivate(event);
              }}
              onDeactivate={event => {
                onDeactivate && onDeactivate(event);
              }}
            >
              {children}
            </OverlayTrigger>
          ) : (
            children
          ))}
        <Component>{() => content()}</Component>
      </Fragment>
    );
  }
);
