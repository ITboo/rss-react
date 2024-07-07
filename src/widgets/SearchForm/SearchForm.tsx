import { Component } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

type State = {
  inputValue: string;
};

export class SearchForm extends Component<SearchFormProps, State> {
  state = {
    inputValue: "",
  };

  private onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ inputValue: event.target.value });
  }

  private onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const inputValue = this.state.inputValue.trim();
    this.props.onSubmit(inputValue);
  }

  render(): ReactNode {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input
          name="search"
          onChange={(e) => this.onInputChange(e)}
          placeholder="Search..."
          spellCheck={false}
          type="search"
          value={this.state.inputValue}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
