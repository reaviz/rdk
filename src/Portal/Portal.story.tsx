import React from 'react';
import { storiesOf } from '@storybook/react';
import { Portal } from './Portal';

storiesOf('Utilities/Portal', module)
  .add('Element', () => (
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
      <Portal>Hello!</Portal>
    </div>
  ));
