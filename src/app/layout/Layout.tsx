import { Component } from "react";
import type { ReactNode } from "react";

import { HomePage } from "../../pages/HomePage/HomePage";
import { Footer } from "../../widgets/Footer/Footer";
import { Header } from "../../widgets/Header/Header";

import styles from "./Layout.module.css";

type LayoutProps = {
  children?: ReactNode;
};

export class Layout extends Component<LayoutProps> {
  render(): ReactNode {
    return (
      <div className={styles.app}>
        <Header>Header</Header>
        <main className="main">
          <HomePage />
        </main>
        <Footer>Footer</Footer>
      </div>
    );
  }
}
