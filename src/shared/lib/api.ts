import { ApiResponse } from '../types/api';

const BASE_URL = 'https://rickandmortyapi.com/api/character';
const DEFAULT_PAGE = 1;
const NOT_FOUND = 404;
const ERROR_MESSAGE = 'Something went wrong';

export const fetchCharacters = async (
  searchTerm: string,
  page = DEFAULT_PAGE
): Promise<ApiResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
  });

  if (searchTerm) {
    params.append('name', searchTerm);
  }

  const url = `${BASE_URL}/?${params.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === NOT_FOUND) {
      return null;
    }

    throw new Error(ERROR_MESSAGE);
  }

  return response.json() as Promise<ApiResponse>;
};
