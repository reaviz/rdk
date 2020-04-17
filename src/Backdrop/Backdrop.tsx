import React, { FC, MouseEvent, Fragment } from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import css from './Backdrop.module.scss';

interface BackdropProps {
  visible: boolean;
  zIndex?: number;
  portalIndex?: number;
  className?: string;
  onClick?: (event: MouseEvent) => void;
}

export const Backdrop: FC<BackdropProps> = ({
  portalIndex = 0,
  zIndex = 998,
  visible = false,
  className,
  onClick = () => undefined
}) => (
  <AnimatePresence>
    <Fragment>
      {visible && (
        <motion.div
          className={classNames(css.backdrop, className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 - portalIndex / 10 }}
          exit={{ opacity: 0 }}
          onClick={onClick}
          style={{ zIndex }}
        />
      )}
    </Fragment>
  </AnimatePresence>
);
