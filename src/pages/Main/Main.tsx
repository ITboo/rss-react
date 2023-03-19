import React, { Component } from "react";
import Searchbar from "../../components/search/Search";
import CardList from "../../components/cardList/CardList";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <CardList />
      </>
    );
  }
}
