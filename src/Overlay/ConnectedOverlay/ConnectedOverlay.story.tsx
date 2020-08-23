import React from 'react';
import { storiesOf } from '@storybook/react';
import { useState, useRef } from '@storybook/addons';
import { ConnectedOverlay } from './ConnectedOverlay';
import { motion } from 'framer-motion';

storiesOf('Utilities|Overlay/Connected Overlay', module)
  .add('Simple', () => {
    const [visible, setVisible] = useState(false);

    return (
      <div
        style={{
          width: 300,
          padding: 50,
          height: 300,
          border: 'solid 1px red'
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
                padding: 15
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
          border: 'solid 1px red'
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
                padding: 15
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
            pointerEvents: 'none'
          }}
          open={open}
          content={() => (
            <motion.div
              style={{
                padding: 5,
                background: 'rgba(0, 0, 0, .5)',
                color: 'white',
                textAlign: 'center',
                borderRadius: 5
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
          border: 'solid 1px red'
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
              borderRadius: 5
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
          border: 'solid 1px red'
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
  })
  .add('Context Menu Example', () => {
    const ContextMenu = ({ children, content }) => {
      const timeout = React.useRef<any>();
      const [open, setOpen] = React.useState(false);

      return (
        <ConnectedOverlay
          trigger="contextmenu"
          placement="bottom"
          triggerElement="div"
          open={open}
          content={() => (
            <motion.div
              style={{
                padding: 5,
                background: 'rgba(0, 0, 0, .5)',
                color: 'white',
                borderRadius: 5
              }}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
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
          border: 'solid 1px red'
        }}
      >
        <ContextMenu content={
          <ul>
            <li>Foo</li>
            <li>Bar</li>
            <li>Baz</li>
          </ul>
        }>
          <span style={{ padding: 10, background: 'blue' }}>Hi!</span>
        </ContextMenu>
      </div>
    );
  });
