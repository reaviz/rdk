import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { OverlayPortal } from './OverlayPortal';
import { useOverlayPortal } from './useOverlayPortal';
import { GlobalOverlay } from './GlobalOverlay';
import { useState, useRef } from '@storybook/addons';
import { ConnectedOverlay } from './ConnectedOverlay';
import { motion } from 'framer-motion';
import { useOverlay } from './useOverlay';
import { useGlobalOverlay } from './useGlobalOverlay';

storiesOf('Utilities|Overlay/Portal', module)
  .add('Element', () => (
    <div
      style={{
        width: 300,
        height: 300,
      }}
    >
      <div
        style={{
          width: 300,
          height: 300,
          background: 'black',
          padding: 50,
          position: 'relative',
          overflow: 'hidden',
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
          overflow: 'hidden',
        }}
      >
        Hello!
        <OverlayPortal>
          Hi - {overlayIndex} - {portalIndex}
        </OverlayPortal>
      </div>
    );
  });

storiesOf('Utilities|Overlay/Global', module)
  .add('Auto Open', () => {
    const [open, setOpen] = useState(true);

    return (
      <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            background: 'black',
            padding: 50,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          Hello
          <GlobalOverlay open={open} onClose={() => setOpen(false)}>
            {({ overlayIndex }) => (
              <div
                style={{
                  background: 'blue',
                  zIndex: overlayIndex,
                  position: 'absolute',
                }}
              >
                Hi - {overlayIndex}
              </div>
            )}
          </GlobalOverlay>
        </div>
      </div>
    );
  })
  .add('Click to open', () => {
    const [open, setOpen] = useState(false);

    return (
      <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            background: 'black',
            padding: 50,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <button type="button" onClick={() => setOpen(true)}>
            Open
          </button>
          <GlobalOverlay
            open={open}
            closeOnBackdropClick={true}
            onClose={() => setOpen(false)}
          >
            {({ overlayIndex }) => (
              <div
                style={{
                  background: 'blue',
                  zIndex: overlayIndex,
                  position: 'absolute',
                }}
              >
                Hi - {overlayIndex}
              </div>
            )}
          </GlobalOverlay>
        </div>
      </div>
    );
  })
  .add('Prompt to close', () => {
    const [open, setOpen] = useState(false);

    return (
      <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            background: 'black',
            padding: 50,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <button type="button" onClick={() => setOpen(true)}>
            Open
          </button>
          <GlobalOverlay
            open={open}
            closeOnBackdropClick={true}
            onClose={() => {
              const ok = window.confirm('Are you sure you want to close?');
              if (ok) {
                setOpen(false);
              }
            }}
          >
            {({ overlayIndex }) => (
              <div
                style={{
                  background: 'blue',
                  zIndex: overlayIndex,
                  position: 'absolute',
                }}
              >
                Hi - {overlayIndex}
              </div>
            )}
          </GlobalOverlay>
        </div>
      </div>
    );
  })
  .add('Hooks', () => {
    const { GlobalOverlay, setOpen, overlayIndex } = useGlobalOverlay({
      onClose: () => setOpen(false),
    });

    return (
      <Fragment>
        <button type="button" onClick={() => setOpen(true)}>
          Open
        </button>
        <GlobalOverlay>
          {() => (
            <div
              style={{
                background: 'blue',
                padding: 25,
                zIndex: overlayIndex as number,
                position: 'fixed',
              }}
            >
              Hello!
            </div>
          )}
        </GlobalOverlay>
      </Fragment>
    );
  })
  .add('Dialog Example', () => {
    const [open, setOpen] = useState(false);

    const Dialog = ({ visible, header, children, onClose }) => (
      <GlobalOverlay open={visible} onClose={onClose}>
        {({ overlayIndex }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: '-20%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '20%' }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              style={{
                zIndex: overlayIndex,
                width: 300,
                top: 50,
                background: 'black',
                position: 'fixed',
                padding: 20,
              }}
            >
              <h1>
                {header}
                <button type="button" onClick={onClose}>
                  X
                </button>
              </h1>
              {children}
            </motion.div>
          </div>
        )}
      </GlobalOverlay>
    );

    const MyDialog = () => {
      const { close } = useOverlay();
      return (
        <div>
          <h1>Whats up?</h1>
          <button type="button" onClick={close}>
            Close
          </button>
        </div>
      );
    };

    return (
      <Fragment>
        <button type="button" onClick={() => setOpen(true)}>
          Open
        </button>
        <Dialog visible={open} header="Welcome!" onClose={() => setOpen(false)}>
          <MyDialog />
        </Dialog>
      </Fragment>
    );
  });

storiesOf('Utilities|Overlay/Connected', module)
  .add('Simple', () => {
    const [visible, setVisible] = useState(false);

    return (
      <div
        style={{
          width: 300,
          padding: 50,
          height: 300,
          border: 'solid 1px red',
        }}
      >
        <ConnectedOverlay
          open={visible}
          onActivate={() => setVisible(true)}
          onDeactivate={() => setVisible(false)}
          content={() => (
            <div
              style={{
                background: 'black',
                padding: 15,
              }}
            >
              <h1>Hello</h1>
            </div>
          )}
        >
          <button type="button">HiOOO!!!</button>
        </ConnectedOverlay>
      </div>
    );
  })
  .add('Default Open', () => {
    const [visible, setVisible] = useState(true);

    return (
      <div
        style={{
          width: 300,
          padding: 50,
          height: 300,
          border: 'solid 1px red',
        }}
      >
        <ConnectedOverlay
          open={visible}
          onActivate={() => setVisible(true)}
          onDeactivate={() => setVisible(false)}
          content={() => (
            <div
              style={{
                background: 'black',
                padding: 15,
              }}
            >
              <h1>Hello</h1>
            </div>
          )}
        >
          <button type="button">HiOOO!!!</button>
        </ConnectedOverlay>
      </div>
    );
  })
  .add('Tooltip Example', () => {
    const Tooltip = ({ children, content }) => {
      const timeout = React.useRef<any>();
      const [open, setOpen] = React.useState(false);

      return (
        <ConnectedOverlay
          trigger="hover"
          placement="top"
          style={{
            pointerEvents: 'none',
          }}
          open={open}
          content={() => (
            <motion.div
              style={{
                padding: 5,
                background: 'rgba(0, 0, 0, .5)',
                color: 'white',
                textAlign: 'center',
                borderRadius: 5,
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
            >
              {content}
            </motion.div>
          )}
          onActivate={() => {
            clearTimeout(timeout.current);
            setOpen(true);
          }}
          onDeactivate={() => {
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => setOpen(false), 100);
          }}
        >
          {children}
        </ConnectedOverlay>
      );
    };

    return (
      <div
        style={{
          width: 300,
          padding: 50,
          height: 300,
          border: 'solid 1px red',
        }}
      >
        <Tooltip content="Hello">
          <span style={{ padding: 10, background: 'blue' }}>Hi!</span>
        </Tooltip>
      </div>
    );
  })
  .add('Menu Example', () => {
    const Menu = ({ children, open, reference, onDeactivate }) => (
      <ConnectedOverlay
        trigger="click"
        placement="bottom-start"
        reference={reference}
        open={open}
        content={() => (
          <motion.div
            style={{
              padding: '5px 20px 5px 0',
              background: 'rgba(0, 0, 0, .5)',
              color: 'white',
              borderRadius: 5,
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {children}
          </motion.div>
        )}
        onDeactivate={onDeactivate}
      />
    );

    const buttonRef = useRef<any>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
      <div
        style={{
          width: 150,
          padding: 50,
          height: 150,
          border: 'solid 1px red',
        }}
      >
        <button
          type="button"
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Open
        </button>
        <Menu
          reference={buttonRef}
          open={menuOpen}
          onDeactivate={() => setMenuOpen(false)}
        >
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </Menu>
      </div>
    );
  });
