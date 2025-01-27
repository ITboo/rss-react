import type { ReactNode } from 'react';
import { Component } from 'react';
import styles from './styles.module.css';

export class ErrorPage extends Component {
  private static handleRefresh = (): void => {
    window.location.reload();
  };

  public render(): ReactNode {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header}>Gotcha! </h1>
          <p className={styles.text}>
            Welcome to Error Universe! The kingdom of unexpected bugs, useless
            workarounds and instantly screaming developers. You can stay there,
            if you want. But I don&apos;t recommend it.
          </p>
          <p className={styles.text}>
            You can refresh this page. Hope, it helps.
          </p>
          <button
            className={styles.refreshBtn}
            type="button"
            onClick={ErrorPage.handleRefresh}
          >
            Refresh the page
          </button>
        </div>
      </main>
    );
  }
}
