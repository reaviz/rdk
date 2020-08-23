import React from 'react';
import { storiesOf } from '@storybook/react';
import { OverlayPortal } from './OverlayPortal';
import { useOverlayPortal } from './useOverlayPortal';

storiesOf('Utilities|Overlay/Overlay Portal', module)
  .add('Element', () => (
    <div
      style={{
        width: 300,
        height: 300
      }}
    >
      <div
        style={{
          width: 300,
          height: 300,
          background: 'black',
          padding: 50,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        Hello
        <OverlayPortal>
          {({ overlayIndex, portalIndex, backdropIndex }) => (
            <div>
              Hi - {overlayIndex} - {portalIndex} - {backdropIndex}
            </div>
          )}
        </OverlayPortal>
      </div>
    </div>
  ))
  .add('Hook', () => {
    const { OverlayPortal, overlayIndex, portalIndex } = useOverlayPortal();

    return (
      <div
        style={{
          width: 300,
          height: 300,
          background: 'black',
          padding: 50,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        Hello!
        <OverlayPortal>
          Hi - {overlayIndex} - {portalIndex}
        </OverlayPortal>
      </div>
    );
  });
