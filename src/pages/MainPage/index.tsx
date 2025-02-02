import type { ReactNode } from 'react';
import { Component } from 'react';

import { CardList } from '../../widgets/CardList';
import { SearchForm } from '../../widgets/SearchForm';
import { ErrorButton } from '../../shared/ui/Button';
import logo from '/logo.png';
import styles from './styles.module.css';

type MainPageProps = Record<string, never>;

type State = {
  searchTerm: string;
  isLoading: boolean;
  lastSearchTime: Date | null;
};

const LOCAL_STORAGE_KEY = 'rss-app';

export class MainPage extends Component<MainPageProps, State> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem(LOCAL_STORAGE_KEY) || '',
      isLoading: false,
      lastSearchTime: null,
    };
  }
  private handleSearch = (term: string): void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, term);
    this.setState({ searchTerm: term, lastSearchTime: new Date() });
  };

  private handleLoadingState = (loading: boolean): void => {
    this.setState({ isLoading: loading });
  };

  public render(): ReactNode {
    const { searchTerm, isLoading, lastSearchTime } = this.state;

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} alt="rick and morty logo" width={200} />
          <SearchForm
            onSearch={this.handleSearch}
            initialTerm={searchTerm}
            isLoading={isLoading}
          />
          <ErrorButton />
        </header>
        <main className={styles.main}>
          <CardList
            searchTerm={searchTerm}
            onLoadingStateChange={this.handleLoadingState}
            lastSearchTime={lastSearchTime}
            isLoading={isLoading}
          />
        </main>
      </div>
    );
  }
}
