import React from 'react';
import { useConfig } from './ConfigContext';
import { ConfigProvider } from './ConfigProvider';
import { darkTheme } from './darkTheme';

export default {
  title: 'Examples/Config Provider',
  component: ConfigProvider
};

const Printer = () => {
  const config = useConfig();

  return (
    <pre style={{ color: 'white' }}>{JSON.stringify(config, null, 2)}</pre>
  );
};

export const Simple = () => (
  <ConfigProvider value={darkTheme}>
    <Printer />
  </ConfigProvider>
);
