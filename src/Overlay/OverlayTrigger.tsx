import React, { useCallback, forwardRef, Ref, FC } from 'react';

export type TriggerTypes = 'hover' | 'click' | 'contextmenu' | 'focus' | 'key';

interface OverlayTriggerEvent {
  type: TriggerTypes;
  nativeEvent: any;
}

interface OverlayTriggerProps {
  children?: any;
  className?: string;
  elementType?: any;
  trigger: TriggerTypes | TriggerTypes[];
  onActivate: (event: OverlayTriggerEvent) => void;
  onDeactivate: (event: OverlayTriggerEvent) => void;
}

export const OverlayTrigger: FC<OverlayTriggerProps & {
  ref: Ref<HTMLSpanElement>;
}> = forwardRef(
  (
    {
      children,
      className,
      elementType = 'span',
      trigger = ['click'],
      onActivate,
      onDeactivate
    }: OverlayTriggerProps,
    ref
  ) => {
    const hasTrigger = useCallback(
      (type: TriggerTypes) => {
        if (Array.isArray(trigger)) {
          return trigger.includes(type);
        } else {
          return type === trigger;
        }
      },
      [trigger]
    );

    const onFocus = useCallback(
      event => {
        if (hasTrigger('focus')) {
          onActivate({ type: 'focus', nativeEvent: event });
        }
      },
      [onActivate, hasTrigger]
    );

    const onBlur = useCallback(
      event => {
        if (hasTrigger('focus')) {
          onDeactivate({ type: 'focus', nativeEvent: event });
        }
      },
      [onDeactivate, hasTrigger]
    );

    const onMouseEnter = useCallback(
      event => {
        if (hasTrigger('hover')) {
          onActivate({ type: 'hover', nativeEvent: event });
        }
      },
      [onActivate, hasTrigger]
    );

    const onMouseLeave = useCallback(
      event => {
        if (hasTrigger('hover')) {
          onDeactivate({ type: 'hover', nativeEvent: event });
        }
      },
      [onDeactivate, hasTrigger]
    );

    const onClick = useCallback(
      event => {
        if (hasTrigger('click')) {
          onActivate({ type: 'click', nativeEvent: event });
        }

        // Kill the tooltip on click if its not a click listener
        if (!hasTrigger('click')) {
          onDeactivate({ type: 'hover', nativeEvent: event });
        }
      },
      [onActivate, onDeactivate, hasTrigger]
    );

    const onContextMenu = useCallback(event => {
      if (hasTrigger('contextmenu')) {
        event.preventDefault();
        onActivate({ type: 'contextmenu', nativeEvent: event });
      }
    }, []);

    const tabIndex = hasTrigger('focus') ? -1 : undefined;
    const Component = elementType;

    return (
      <Component
        ref={ref}
        tabIndex={tabIndex}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        onContextMenu={onContextMenu}
        className={className}
      >
        {children}
      </Component>
    );
  }
);
