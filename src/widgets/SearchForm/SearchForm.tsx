import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import Button from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";

type SearchFormProps = {
  setSearch: (value: string) => void;
};

export const SearchForm = ({ setSearch }: SearchFormProps) => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("searchValue") ?? "",
  );
  const inputRef = useRef(inputValue);

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem("searchValue", inputRef.current);
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("searchValue", inputValue ?? "");
    setSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="search"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        placeholder="Search..."
        spellCheck={false}
        type="search"
        value={inputValue}
      />
      <Button className="searchButton" type="submit">
        Search
      </Button>
    </form>
  );
};
