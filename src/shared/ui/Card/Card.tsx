import { CharacterType } from "../../../shared/types/types";

import styles from "../../../app/styles/Card.module.css";

type CardProps = {
  character: CharacterType;
};

export const Card = (props: CardProps) => {
  const { character } = props;

  return (
    <article className={styles.card}>
      <img
        alt={character.name}
        height="300"
        src={character.image}
        width="300"
      />
      <h2 className={styles.cardHeading}>{character.name}</h2>
      <div className={styles.cardInfo}>
        <p>
          <span>Episode appearances:</span> {character.episode.length}
        </p>
        <p>
          <span>Status:</span> {character.status}
        </p>
        <p>
          <span>Species:</span> {character.species}
        </p>
        <p>
          <span>Gender:</span> {character.gender}
        </p>
        <p>
          <span>Origin:</span> {character.origin.name}
        </p>
        <p>
          <span>Location:</span> {character.location.name}
        </p>
      </div>
    </article>
  );
};
