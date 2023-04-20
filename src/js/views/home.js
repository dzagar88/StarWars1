import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const {store, actions} = useContext(Context);
  useEffect(() => {
    actions.getCharactersFromApi();
  }, []);

  return (
    <div className="container">
      <h1 className="100-w text-center">{"Rick & Morty"}</h1>
      <div className="d-flex flex-column">
        <div className="d-flex 100-w">
          <h2>{"Characters"}</h2>
        </div>
        <div className="d-flex 100-w overflow-auto">
          {store.characters.map((character) => {
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
