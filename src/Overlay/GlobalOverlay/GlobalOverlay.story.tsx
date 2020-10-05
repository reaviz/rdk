import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalOverlay } from './GlobalOverlay';
import { useState } from '@storybook/addons';
import { motion } from 'framer-motion';
import { useGlobalOverlay } from './useGlobalOverlay';

storiesOf('Utilities/Overlay/Global Overlay', module)
  .add('Auto Open', () => {
    const [open, setOpen] = useState(true);

    return (
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
          <GlobalOverlay open={open} onClose={() => setOpen(false)}>
            {({ overlayIndex }) => (
              <div
                style={{
                  background: 'blue',
                  zIndex: overlayIndex,
                  position: 'absolute'
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
                  position: 'absolute'
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
                  position: 'absolute'
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
      onClose: () => setOpen(false)
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
                position: 'fixed'
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
              alignItems: 'center'
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
                padding: 20
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

