import { Component, ReactNode } from "react";

import styles from "./ErrorButton.module.css";

const errorMessage = "Oh no... You have a problem!";
class ErrorButton extends Component {
  createError = () => {
    this.setState({ hasError: false });
  };

  resetError = () => {
    this.setState({ hasError: true });
    throw new Error(errorMessage);
  };

  state = {
    hasError: false,
  };

  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error(errorMessage);
    }

    return (
      <>
        {!this.state.hasError && (
          <button className={styles.errorButton} onClick={this.resetError}>
            I DARE YOU TO PUSH IT
          </button>
        )}
      </>
    );
  }
}

export default ErrorButton;
