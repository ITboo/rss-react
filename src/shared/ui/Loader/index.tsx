import { Component, ReactNode } from 'react';
import './index.css';
export class Loader extends Component {
  public render(): ReactNode {
    return (
      <main className="main">
        <div className="lds-ellipsis">
          <div className="loader"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    );
  }
}
