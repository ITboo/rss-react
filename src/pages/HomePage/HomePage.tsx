import { Component } from "react";
import type { ReactNode } from "react";

import { BASE_URL } from "../../shared/constants/constants";
import { CardList } from "../../widgets/CardList/CardList";

type HomePageProps = {
  characters?: ReactNode;
};

export class HomePage extends Component<HomePageProps> {
  fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      this.setState({ data: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <>
        <CardList data={this.state.data} />
      </>
    );
  }
}
