import { Component } from "react";
import type { ReactNode } from "react";

import styles from "./ErrorPage.module.css";

export class ErrorPage extends Component {
  render(): ReactNode {
    return (
      <div className={styles.page}>
        <h1 className={styles.heading}>Ooops, something went wrong</h1>
      </div>
    );
  }
}
