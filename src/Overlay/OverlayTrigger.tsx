import React, { useCallback, forwardRef, Ref, FC } from 'react';

export type TriggerTypes = 'hover' | 'click' | 'focus' | 'key';

interface OverlayTriggerEvent {
  type: TriggerTypes;
  nativeEvent: any;
}

interface OverlayTriggerProps {
  children?: any;
  className?: string;
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

    const tabIndex = hasTrigger('focus') ? -1 : undefined;

    return (
      <span
        ref={ref}
        tabIndex={tabIndex}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        className={className}
      >
        {children}
      </span>
    );
  }
);
