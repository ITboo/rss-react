import { useState, type ReactNode } from 'react';
import Main from '../pages/MainPage';
import Header from '../widgets/Header';

import styles from './styles.module.css';

export function App(): ReactNode {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') || ''
  );
  return (
    <div className={styles.container}>
      <Header onSearch={setSearchQuery} />
      <Main searchQuery={searchQuery} />
    </div>
  );
}
