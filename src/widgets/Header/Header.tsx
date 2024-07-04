import { Component } from "react";
import type { ReactNode } from "react";

import { Logo } from "../../shared/ui/Logo/Logo";

import styles from "./Header.module.css";

type HeaderProps = {
  children?: ReactNode;
};

export class Header extends Component<HeaderProps> {
  render(): ReactNode {
    return (
      <header className={styles.header}>
        <Logo />
        <input id="search" name="search" placeholder="Search..." type="text" />
        <button type="submit">Search</button>
      </header>
    );
  }
}
