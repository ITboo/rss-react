import { ErrorButton } from '../../shared/ui/Button';
import SearchForm from '../SearchForm';
import logo from '/logo.png';
import styles from './styles.module.css';

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="rick and morty logo" width={200} />
      <SearchForm onSearch={onSearch} />
      <ErrorButton />
    </header>
  );
};

export default Header;
