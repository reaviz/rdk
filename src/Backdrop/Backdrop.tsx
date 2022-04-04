import React, { FC, MouseEvent } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion/dist/framer-motion';
import css from './Backdrop.module.css';

export interface BackdropProps {
  zIndex?: number;
  portalIndex?: number;
  className?: string;
  onClick?: (event: MouseEvent) => void;
}

export const Backdrop: FC<BackdropProps> = ({
  portalIndex = 0,
  zIndex = 998,
  className,
  onClick = () => undefined
}) => (
  <motion.div
    className={classNames(css.backdrop, className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.8 - portalIndex / 10 }}
    exit={{ opacity: 0 }}
    style={{ zIndex }}
    onClick={onClick}
  />
);
