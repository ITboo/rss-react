import { CharacterType } from "../../shared/types/types";
import { Card } from "../../shared/ui/Card/Card";

import styles from "../../app/styles/CardList.module.css";

type CardListProps = {
  data?: CharacterType[];
  openModal: () => void;
};

export const CardList = (props: CardListProps) => {
  const { data, openModal } = props;
  if (!data) {
    return null;
  }

  const characters = props.data?.map((character) => (
    <Card character={character} key={character.id} openModal={openModal} />
  ));
  return data.length > 0 ? (
    <section className={styles.cards}>{characters}</section>
  ) : (
    <h2>Nothing is found</h2>
  );
};
