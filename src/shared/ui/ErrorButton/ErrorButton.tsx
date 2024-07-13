import { Component, ReactNode } from "react";

import Button from "../Button/Button";

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
          <Button className="error-button" onClick={this.resetError}>
            BOOM!
          </Button>
        )}
      </>
    );
  }
}

export default ErrorButton;
