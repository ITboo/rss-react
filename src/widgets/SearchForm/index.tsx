import { FormEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../../shared/ui/Button';
import styles from './styles.module.css';

interface SearchProps {
  onSearch: (term: string) => void;
  initialSearchTerm?: string;
}

const SearchForm = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    localStorage.setItem('searchQuery', query);
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
