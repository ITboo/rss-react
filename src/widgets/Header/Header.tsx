import { Component } from "react";
import type { ReactNode } from "react";

import ErrorButton from "../../shared/ui/ErrorButton/ErrorButton";
import { Logo } from "../../shared/ui/Logo/Logo";
import { SearchForm } from "../SearchForm/SearchForm";

import styles from "./Header.module.css";

type HeaderProps = {
  handleSearch: (query: string) => void;
};

export class Header extends Component<HeaderProps> {
  render(): ReactNode {
    return (
      <header className={styles.header}>
        <Logo />
        <SearchForm onSubmit={this.props.handleSearch} />
        <ErrorButton />
      </header>
    );
  }
}
