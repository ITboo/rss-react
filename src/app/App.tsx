import { Component } from 'react';
import type { ReactNode } from 'react';

import { MainPage } from '../pages/MainPage';

export class App extends Component {
  public render(): ReactNode {
    return <MainPage />;
  }
}
