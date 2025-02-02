import type { ReactNode } from 'react';
import { Component } from 'react';

import styles from './styles.module.css';

type ErrButtonProps = Record<string, never>;

type State = {
  shouldThrowError: boolean;
};

export class ErrorButton extends Component<ErrButtonProps, State> {
  constructor(props: ErrButtonProps) {
    super(props);
    this.state = {
      shouldThrowError: false,
    };
  }

  private handleClick(): void {
    this.setState({ shouldThrowError: true });
  }

  public render(): ReactNode {
    const { shouldThrowError } = this.state;

    if (shouldThrowError) {
      throw new Error('Error button was clicked');
    }

    return (
      <button
        className={`${styles.error_button} + ${styles.button}`}
        type="button"
        onClick={() => this.handleClick()}
      >
        DO NOT PUSH
      </button>
    );
  }
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
};
export class Button extends Component<ButtonProps> {
  public render(): ReactNode {
    const { children, onClick, type } = this.props;
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
}
