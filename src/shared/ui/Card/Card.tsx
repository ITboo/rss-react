import { CharacterType } from "../../../shared/types/types";

import styles from "../../../app/styles/Card.module.css";

type CardProps = {
  character: CharacterType;
  openModal: (id: number) => void;
};

export const Card = (props: CardProps) => {
  const { character, openModal } = props;

  return (
    <article className={styles.card} onClick={() => openModal(character.id)}>
      <img
        alt={character.name}
        className={styles.image}
        height="200"
        src={character.image}
        width="200"
      />
      <h2 className={styles.card_heading}>{character.name}</h2>
      <div className={styles.card_info}>
        <p>{character.gender}</p>
      </div>
    </article>
  );
};
