import { Component } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

type State = {
  inputValue: null | string;
};

export class SearchForm extends Component<SearchFormProps, State> {
  state = {
    inputValue: localStorage.getItem("inputValue"),
  };

  private onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ inputValue: event.target.value });
  }

  private onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const inputValue = this.state.inputValue?.trim();
    this.props.onSubmit(inputValue ?? "");
  }

  componentDidMount(): void {
    localStorage.getItem("inputValue");
    console.log(localStorage);
  }

  componentDidUpdate(): void {
    localStorage.setItem("inputValue", this.state.inputValue ?? "");
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
          value={this.state.inputValue ?? []}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
