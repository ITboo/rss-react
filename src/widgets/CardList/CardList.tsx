import { Component } from "react";
import type { ReactNode } from "react";

import { CharacterType } from "../../shared/types/types";
import { Card } from "../../shared/ui/Card/Card";

import styles from "./CardList.module.css";

type CardListProps = {
  data: CharacterType[];
};

export class CardList extends Component<CardListProps> {
  render(): ReactNode {
    const characters = this.props.data?.map((character) => (
      <Card character={character} key={character.id} />
    ));
    return this.props.data.length > 0 ? (
      <section className={styles.cards}>{characters}</section>
    ) : (
      <h2>Nothing is found</h2>
    );
  }
}
