import { Component } from "react";
import type { ReactNode } from "react";

import logoImg from "../../../../public/logo.png";

export class Logo extends Component {
  render(): ReactNode {
    return (
      <div>
        <img alt="logo" src={logoImg} width="200" />
      </div>
    );
  }
}
