import { ChangeEvent, FormEvent, useEffect, useRef } from "react";

import { useLocalStorage } from "../../app/hooks/useLocalStorage";
import Button from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";

import styles from "../../app/styles/SearchForm.module.css";

type SearchFormProps = {
  setSearch: (value: string) => void;
};

export const SearchForm = ({ setSearch }: SearchFormProps) => {
  /*const [inputValue, setInputValue] = useState(
    localStorage.getItem("searchValue") ?? "",
  );*/
  const [inputValue, setInputValue] = useLocalStorage("searchValue", "");

  const inputRef = useRef(inputValue);

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      setInputValue(inputRef.current);
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValue(inputValue ?? "");
    setSearch(inputValue);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
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
      <Button className="search-button" type="submit">
        <svg
          fill="none"
          height="25"
          viewBox="0 0 25 25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_7_53)">
            <path
              d="M24.2252 21.2744L18.3035 16.2379C17.6913 15.6869 17.0367 15.434 16.5077 15.4584C17.9057 13.8211 18.75 11.6968 18.75 9.37502C18.75 4.19732 14.5527 0 9.37502 0C4.19737 0 0 4.19732 0 9.37502C0 14.5527 4.19732 18.75 9.37502 18.75C11.6968 18.75 13.8211 17.9056 15.4584 16.5077C15.434 17.0366 15.6869 17.6912 16.2379 18.3034L21.2743 24.2251C22.1367 25.1833 23.5454 25.2641 24.4046 24.4047C25.264 23.5454 25.1834 22.1367 24.2252 21.2744ZM9.37502 15.625C5.92325 15.625 3.12501 12.8267 3.12501 9.37502C3.12501 5.92325 5.92325 3.12501 9.37502 3.12501C12.8267 3.12501 15.625 5.92325 15.625 9.37502C15.625 12.8267 12.8268 15.625 9.37502 15.625Z"
              fill="#42B4CA"
            />
          </g>
          <defs>
            <clipPath id="clip0_7_53">
              <rect fill="white" height="25" width="25" />
            </clipPath>
          </defs>
        </svg>
      </Button>
    </form>
  );
};
