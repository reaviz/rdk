import React from 'react';
import { OverlayPortal } from './OverlayPortal';

export default {
  title: 'Examples/Overlay/Overlay Portal',
  component: OverlayPortal
};

export const Simple = () => (
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
);
