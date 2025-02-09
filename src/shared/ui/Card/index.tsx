import { Character } from '../../types/api';
import styles from './styles.module.css';

interface CardProps {
  character: Character;
}

const CharacterCard = ({ character }: CardProps) => {
  return (
    <div className={styles.card}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <h3 className={styles.title}>{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
