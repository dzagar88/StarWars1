import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";

export const Home = () => {
  const BASE_API_URL = "https://rickandmortyapi.com/api";
  const [characters, setCharacters] = useState([]);
  async function getCharactersFromApi() {
    // fetch characters
    try {
      const response = await fetch(`${BASE_API_URL}/character`);
      const body = await response.json();
      if (!response.ok) throw new Error(`>>> Uh oh, ${body}..`);
      // update characters state
      setCharacters(body.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharactersFromApi();
  }, []);

  return (
    <div className="container">
      <h1 className="100-w text-center">{"Rick & Morty"}</h1>
      <div className="d-flex flex-column">
        <div className="d-flex 100-w">
          <h2>{"Characters"}</h2>
        </div>
        <div className="d-flex 100-w overflow-auto">
          {characters.map((character) => {
						return (
							<CharacterCard
								key={character.id}
								character={character} />
						)
					})}
        </div>
      </div>
    </div>
  );
};
