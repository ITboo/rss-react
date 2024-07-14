import { useEffect, useState } from "react";

import { useLocalStorage } from "../../app/hooks/useLocalStorage";
import { BASE_URL } from "../../shared/constants/constants";
import { ResponseType } from "../../shared/types/types";
import { CardDetails } from "../../widgets/CardDetails/CardDetails";
import { CardList } from "../../widgets/CardList/CardList";
import { SearchForm } from "../../widgets/SearchForm/SearchForm";

import styles from "../../app/styles/Home.module.css";

export interface Character {
  created: string;
  episode: string[];
  gender: "Female" | "Genderless" | "Male" | "unknown";
  id: number;
  image: string;
  location: CharacterLocation;
  name: string;
  origin: CharacterLocation;
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  url: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResponseDataType {
  info?: {
    count: number;
    next: null | string;
    pages: number;
    prev: null | string;
  };
  results?: Character[];
}

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ResponseType | null>(null);
  const [search, setSearch] = useLocalStorage("searchValue", "");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardID, setModalCardID] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/?name=${search}`);
        const { results }: ResponseDataType = await res.json();
        results ? setData(results) : setData([]);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    })();
  }, [search]);

  const openModal = (id: number) => {
    setIsModalOpen(true);
    setModalCardID(id);
  };

  const setModal = () => setIsModalOpen(false);

  return (
    <main>
      <SearchForm setSearch={setSearch} />
      <div className={styles.mainWrapper}>
        {isLoading ? (
          <h3>loading...</h3>
        ) : (
          <CardList data={data} openModal={openModal} />
        )}
        {isModalOpen && (
          <CardDetails cardId={modalCardID} setModal={setModal} />
        )}
      </div>
    </main>
  );
};
