import React from "react";
import "./Card.css";

interface ICard{
  name: string,
  photo: string,
  description: string,
}

type CardListProps={
card: ICard[]
}

class Card extends React.Component <ICard> {
  render() {
    return (
      <div className="card">
        <h2 className="card__title">{this.props.name}</h2>
        <img className="card__img" src={this.props.photo} />
        <p className="card__description">
          {this.props.description}
        </p>
      </div>
    );
  }
}
export default Card;

