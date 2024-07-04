import { Component } from "react";
import type { ReactNode } from "react";

type HomePageProps = {
  children?: ReactNode;
};

export class HomePage extends Component<HomePageProps> {
  render(): ReactNode {
    return <div>HomePage</div>;
  }
}
