import React from 'react';
import { storiesOf } from '@storybook/react';
import { Position, PositionRef } from './Position';
import { useRef } from '@storybook/addons';
import { usePosition } from './usePosition';

storiesOf('Utilities|Position', module)
  .add('Element', () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const positionRef = useRef<PositionRef | null>(null);

    return (
      <div
        style={{
          padding: 50,
          border: 'solid 1px red'
        }}
      >
        <div
          onClick={() => {
            console.log('You can update position manually too!', positionRef);
            positionRef.current?.updatePosition();
          }}
          ref={ref}
          style={{
            width: 100,
            height: 100,
            background: 'black',
            padding: 50
          }}
        >
          Hello!
        </div>
        <Position reference={ref} placement="bottom" ref={positionRef}>
          Positioned
        </Position>
      </div>
    );
  })
  .add('Hook', () => {
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
  });
