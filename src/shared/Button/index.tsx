import type { ReactNode } from 'react';
import { Component } from 'react';

type Props = Record<string, never>;

type State = {
  shouldThrowError: boolean;
};

export class ErrorButton extends Component<Props, State> {
  constructor(props: Props) {
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
      <button type="button" onClick={() => this.handleClick()}>
        DO NOT PUSH
      </button>
    );
  }
}
