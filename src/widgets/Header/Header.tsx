import ErrorButton from "../../shared/ui/ErrorButton/ErrorButton";
import { Logo } from "../../shared/ui/Logo/Logo";
import { SearchForm } from "../SearchForm/SearchForm";

import styles from "../../app/styles/Header.module.css";

type HeaderProps = {
  handleSearch: (query: string) => void;
};

export const Header = (handleSearch: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchForm onSubmit={handleSearch} />
      <ErrorButton />
    </header>
  );
};
