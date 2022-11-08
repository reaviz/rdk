import { createContext, useContext } from 'react';
import { Theme } from './types';

export interface ConfigContextProps {
  theme?: Theme;
}

export const ConfigContext = createContext<ConfigContextProps>({} as any);

export const useConfig = () => {
  const context = useContext(ConfigContext);

  if (context === undefined) {
    throw new Error(
      '`useConfig` hook must be used within a `ConfigContext` component'
    );
  }

  return context;
};
