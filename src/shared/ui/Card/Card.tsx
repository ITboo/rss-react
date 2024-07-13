import { Link } from "react-router-dom";

import { CharacterType } from "../../../shared/types/types";
import Button from "../Button/Button";

import styles from "../../../app/styles/Card.module.css";

type CardProps = {
  character: CharacterType;
};

export const Card = (props: CardProps) => {
  const { character } = props;

  return (
    <Link className={styles.card} to="/about">
      <img
        alt={character.name}
        height="300"
        src={character.image}
        width="300"
      />
      <h2 className={styles.cardHeading}>{character.name}</h2>
      <div className={styles.cardInfo}>
        <p>
          <span>Status:</span> {character.status}
        </p>
        <p>
          <span>Species:</span> {character.species}
        </p>
        <p>
          <span>Gender:</span> {character.gender}
        </p>
        <Button className="detailsButton">SHOW ME MOAR</Button>
      </div>
    </Link>
  );
};
