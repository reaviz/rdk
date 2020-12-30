import React, { useRef } from 'react';
import { usePosition } from './usePosition';

export default {
  title: 'Examples/Position'
};

export const Simple = () => {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [positionRef] = usePosition(anchorRef, { placement: 'bottom' });

  return (
    <div
      style={{
        padding: 50,
        border: 'solid 1px red'
      }}
    >
      <div
        ref={anchorRef}
        style={{
          width: 100,
          height: 100,
          background: 'black',
          padding: 50
        }}
      >
        Hello!
      </div>
      <div ref={positionRef}>Positioned</div>
    </div>
  );
};
