import { ReactNode } from 'react';
import './index.css';
export function Loader(): ReactNode {
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
