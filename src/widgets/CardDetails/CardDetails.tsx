import { useEffect, useState } from "react";

import { BASE_URL } from "../../shared/constants/constants";

import styles from "../../app/styles/CardDetails.module.css";

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

export interface CardDetailsProps {
  cardId: number;
  setModal: () => void;
}

export function CardDetails({ cardId, setModal }: CardDetailsProps) {
  const [data, setData] = useState<Character>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/${cardId}`);
        const card: Character = await res.json();
        setData(card);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    })();
  }, [cardId]);

  return isLoading ? (
    <h2>Loading</h2>
  ) : data ? (
    <>
      <article className={styles.detailsCard}>
        <div className={styles.close} onClick={setModal}>
          ✖
        </div>
        <div className={styles.detailsTitle}>{data.name}</div>
        <div>{data.species}</div>
        <img alt={data.name} className={styles.detailsImg} src={data.image} />

        <div>
          <div>
            <span>Status: </span>
            {data.status}
          </div>
          <div>
            <span>Gender: </span>
            {data.gender}
          </div>
          <div>
            <span>Origin: </span>
            {data.origin?.name}
          </div>
          <div>
            <span>Location: </span>
            {data.location?.name}
          </div>
        </div>
      </article>
    </>
  ) : (
    <div className="card modal"></div>
  );
}
