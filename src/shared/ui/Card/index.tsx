import type { ReactNode } from 'react';
import { Component } from 'react';

import { Character } from '../../types/api';

import styles from './styles.module.css';

interface CardProps {
  character: Character;
}

export class Card extends Component<CardProps> {
  public render(): ReactNode {
    const { character } = this.props;

    return (
      <div className={styles.card}>
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
        />
        <h2 className={styles.title}>{character.name}</h2>
        <div className={styles.propsContainer}>
          <p className={styles.prop}>
            <span className={styles.param}>Species:</span> {character.species}
          </p>
          <p className={styles.prop}>
            <span className={styles.param}>Status:</span> {character.status}
          </p>
          <p className={styles.prop}>
            <span className={styles.param}>Gender:</span> {character.gender}
          </p>
        </div>
      </div>
    );
  }
}
