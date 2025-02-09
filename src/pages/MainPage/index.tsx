import { useState, useEffect, ReactNode } from 'react';
import { Loader } from '../../shared/ui/Loader';
import CharacterCard from '../../shared/ui/Card';

import styles from './styles.module.css';
interface MainPageProps {
  searchQuery: string;
}
const Main = ({ searchQuery }: MainPageProps): ReactNode => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [searchQuery]);

  return (
    <main>
      {characters.length === 0 && (
        <div className={styles.no_found}>No characters found</div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.card_list}>
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
