import type { FormEvent, ReactNode } from 'react';
import { Component, createRef } from 'react';

import styles from './styles.module.css';
import { Button } from '../../shared/ui/Button';

type SearchFormProps = {
  onSearch: (term: string) => void;
  initialTerm: string;
  isLoading: boolean;
};

export class SearchForm extends Component<SearchFormProps> {
  private inputRef = createRef<HTMLInputElement>();

  public componentDidMount(): void {
    this.inputRef.current?.focus();
  }

  public componentDidUpdate(prevProps: SearchFormProps): void {
    const { isLoading } = this.props;

    if (prevProps.isLoading && !isLoading) {
      this.inputRef.current?.focus();
    }
  }

  private handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (event.target instanceof HTMLFormElement) {
      const { onSearch } = this.props;

      onSearch(this.inputRef.current?.value.trim() ?? '');
    }
  };

  public render(): ReactNode {
    const { initialTerm } = this.props;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
          defaultValue={initialTerm}
          autoComplete="off"
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}
