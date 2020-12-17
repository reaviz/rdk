import React, { FC, MouseEvent } from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import css from './Backdrop.module.css';

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
  </AnimatePresence>
);
