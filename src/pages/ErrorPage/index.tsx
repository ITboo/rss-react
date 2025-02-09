import type { ReactNode } from 'react';
import { Button } from '../../shared/ui/Button';

import styles from './styles.module.css';

export function ErrorPage(): ReactNode {
  const handleRefresh = (): void => {
    window.location.reload();
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.header}>Gotcha! </h1>
        <p className={styles.text}>
          Welcome to Error Universe! The kingdom of unexpected bugs, useless
          workarounds and instantly screaming developers. You can stay there, if
          you want. But I don&apos;t recommend it.
        </p>
        <p className={styles.text}>
          You can refresh this page. Hope, it helps.
        </p>
        <div className={styles.btn_container}>
          <Button type="button" onClick={handleRefresh}>
            Refresh the page
          </Button>
        </div>
      </div>
    </main>
  );
}
