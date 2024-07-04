import { Component } from "react";
import type { ReactNode } from "react";

import styles from "./Footer.module.css";

type FooterProps = {
  children?: ReactNode;
};

export class Footer extends Component<FooterProps> {
  render(): ReactNode {
    return (
      <footer className={styles.footer}>
        <a
          href="https://github.com/ITboo"
          rel="noopener noreferrer"
          target="_blank"
        >
          @ITboo
        </a>
      </footer>
    );
  }
}
