import { createContext, ReactNode, useState, useEffect } from 'react';

interface GenreContextData {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

interface GenreProviderProps {
  children: ReactNode;
}

export const GenreContext = createContext({} as GenreContextData);

export function GenreProvider({ children }: GenreProviderProps) {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <GenreContext.Provider 
      value={{
        selectedGenreId,
        handleClickButton,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
}
