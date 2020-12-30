import React from 'react';
import { Portal } from './Portal';

export default {
  title: 'Examples/Portal',
  component: Portal
};

export const Simple = () => (
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
);
