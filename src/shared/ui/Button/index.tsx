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
        className={styles.error_button}
        type="button"
        onClick={() => this.handleClick()}
      >
        DO NOT PUSH
      </button>
    );
  }
}

type ButtonProps = { children: ReactNode };
export class Button extends Component<ButtonProps> {
  public render(): ReactNode {
    const { children } = this.props;
    return (
      <button className={styles.button} type="button">
        {children}
      </button>
    );
  }
}
