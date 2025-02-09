import type { ReactNode } from 'react';
import { useState } from 'react';

import styles from './styles.module.css';

export function ErrorButton() {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  const handleClick = () => {
    setShouldThrowError(true);
  };

  if (shouldThrowError) {
    throw new Error('Error button was clicked');
  }

  return (
    <button
      className={`${styles.error_button} + ${styles.button}`}
      type="button"
      onClick={handleClick}
    >
      DO NOT PUSH
    </button>
  );
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
};
export function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button
      className={`${styles.button} + ${styles.default_button}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
