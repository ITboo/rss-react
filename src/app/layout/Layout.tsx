import { ResponseType } from "../../shared/types/types";
import { CardList } from "../../widgets/CardList/CardList";
import { Footer } from "../../widgets/Footer/Footer";
import { Header } from "../../widgets/Header/Header";

import styles from "../styles/Layout.module.css";

type State = {
  data: ResponseType | null;
  isLoading: boolean;
};

export const Layout = (props: State) => {
  const handleSearch = () => {
    console.log("handleSearch");
  };
  return (
    <div className={styles.app}>
      <Header handleSearch={handleSearch} />
      <CardList data={props.data?.results ?? []} />
      <Footer />
    </div>
  );
};

/*
import { BASE_URL } from "../../shared/constants/constants";
import { ResponseType } from "../../shared/types/types";

{isLoading ? (
          <>loading...</>
        ) : (
          <main className="main">
            
          </main>
        )}
  
  private handleSearch = (query: string): void => {
    this.setState({ isLoading: true }, () => void this.fetchData(query));
  };

  fetchData = async (query?: string): Promise<void> => {
    query ? await this.searchItem(query) : await this.getAll();
  };

  getAll = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      this.setState({ data: data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  searchItem = async (query: string, page = 1) => {
    const params = new URLSearchParams({
      name: query,
      page: page.toString(),
    });
    try {
      const response = await fetch(`${BASE_URL}?${params.toString()}`);
      const data = await response.json();
      this.setState({ data: data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  state: State = {
    data: null,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchData();
  }*/
