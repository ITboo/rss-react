export type CharacterType = {
  created: string;
  episode: string[];
  gender: "Female" | "Genderless" | "Male" | "unknown";
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  url: string;
};
