import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Backdrop } from './Backdrop';
import { useState } from '@storybook/addons';

storiesOf('Utilities/Backdrop', module).add('Simple', () => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setVisible(true)}>Click me</button>
      <Backdrop visible={visible} onClick={() => setVisible(false)} />
    </Fragment>
  );
});
