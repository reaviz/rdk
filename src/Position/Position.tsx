import React, { FC, useImperativeHandle, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { usePosition, ReferenceProp, PositionOptions } from './usePosition';
import css from './Position.module.css';

export interface PositionProps extends PositionOptions {
  reference: ReferenceProp;
  className?: string;
  style?: any;
}

export interface PositionRef {
  updatePosition: () => void;
}

export const Position: FC<PositionProps & {
  ref: Ref<PositionRef>;
}> = forwardRef(({ className, style, children, reference, ...rest }, ref) => {
  const [positionRef, popperRef] = usePosition(reference, rest);

  useImperativeHandle(ref, () => ({
    updatePosition: () => popperRef.current.scheduleUpdate()
  }));

  return (
    <span
      ref={positionRef}
      className={classNames(className, css.container)}
      style={style}
    >
      {children}
    </span>
  );
});
