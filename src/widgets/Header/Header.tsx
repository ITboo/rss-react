import { Link } from "react-router-dom";

import ErrorButton from "../../shared/ui/ErrorButton/ErrorButton";
import { Logo } from "../../shared/ui/Logo/Logo";

import styles from "../../app/styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/about">About</Link>
      <ErrorButton />
    </header>
  );
};
