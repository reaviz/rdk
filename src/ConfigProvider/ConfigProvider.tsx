import React, {
  useRef,
  FC,
  PropsWithChildren,
  RefObject,
  useMemo,
  useEffect,
  useCallback
} from 'react';
import { ConfigContext, ConfigContextProps } from './ConfigContext';
import { createSheet, isRefObject } from './utils';

export type ConfigProviderProps = PropsWithChildren<{
  value: ConfigContextProps;
  reference?: RefObject<any> | HTMLElement;
}>;

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  value,
  reference = document.body
}) => {
  const sheetRef = useRef<CSSStyleSheet | null>(null);

  const applyTheme = useCallback(() => {
    if (!sheetRef.current) {
      const element = isRefObject(reference)
        ? (reference as RefObject<any>).current
        : reference;

      sheetRef.current = createSheet(element, value);
    }
  }, [value, reference]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  const values: any = useMemo(
    () => ({
      ...value
    }),
    [value]
  );

  return (
    <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
  );
};
