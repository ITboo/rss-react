import type { ReactNode } from 'react';
import { Component } from 'react';

import { ErrorButton } from '../../shared/Button';

import styles from './styles.module.css';

export class MainPage extends Component {
  public render(): ReactNode {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header}>Gotcha! </h1>
          <ErrorButton />
        </div>
      </main>
    );
  }
}
