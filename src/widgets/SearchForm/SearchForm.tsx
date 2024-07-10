import { ChangeEvent, FormEvent } from "react";

type SearchFormProps = {
  inputValue: null | string;
  onSubmit: (value: string) => void;
};

function onSubmit(e: FormEvent<HTMLFormElement>): void {
  console.log("onSubmit", e);
}
function onInputChange(e: ChangeEvent<HTMLInputElement>) {
  console.log("onInputChange", e);
}

export const SearchForm = (props: SearchFormProps) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        name="search"
        onChange={(e) => onInputChange(e)}
        placeholder="Search..."
        spellCheck={false}
        type="search"
        value={props.inputValue ?? []}
      />
      <button type="submit">Search</button>
    </form>
  );
};
/*

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
  }*/
