import { Component } from "react";
import type { ReactNode } from "react";

import { Layout } from "./layout/Layout";

export class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Layout />
      </>
    );
  }
}
