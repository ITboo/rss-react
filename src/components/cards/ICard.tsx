export interface ICard {
    id: string,
    image: string,
    title: string,
    info: string,
}

export type CardListProps = {
    cards: ICard[]
}