import type { ReactNode } from 'react';
import { Component } from 'react';

import { Card } from '../../shared/ui/Card';
import { Character } from '../../shared/types/api';
import { fetchCharacters } from '../../shared/lib/api';

import styles from './styles.module.css';

type CardListProps = {
  searchTerm: string;
  onLoadingStateChange: (isLoading: boolean) => void;
  lastSearchTime: Date | null;
  isLoading: boolean;
};

type CardListState = {
  cards: Character[];
};

export class CardList extends Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  public componentDidMount(): void {
    const { searchTerm } = this.props;

    void this.updateCards(searchTerm);
  }

  public componentDidUpdate(prevProps: CardListProps): void {
    const { lastSearchTime, searchTerm } = this.props;

    if (prevProps.lastSearchTime !== lastSearchTime) {
      void this.updateCards(searchTerm);
    }
  }

  private updateCards = async (searchTerm: string): Promise<void> => {
    const { onLoadingStateChange } = this.props;

    onLoadingStateChange(true);

    try {
      const data = await fetchCharacters(searchTerm);

      if (data) {
        this.setState({ cards: data.results });
      } else {
        this.setState({ cards: [] });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      onLoadingStateChange(false);
    }
  };

  public render(): ReactNode {
    const { cards } = this.state;
    const { isLoading } = this.props;

    if (isLoading) {
      return <p>loading...</p>;
    }

    if (cards.length === 0) {
      return <div className={styles.noResults}>No characters found</div>;
    }

    return (
      <div className={styles.card_list}>
        {cards.map((card) => (
          <Card key={card.id} character={card} />
        ))}
      </div>
    );
  }
}
