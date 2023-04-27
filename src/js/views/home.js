import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { Context } from "../store/appContext";
import { LocationCard } from "../component/LocationCard";
import { EpisodeCard } from "../component/EpisodeCard";

export const Home = () => {
  const {store, actions} = useContext(Context);
  useEffect(() => {
    actions.getCharactersFromApi();
    actions.getLocationsFromApi();
    actions.getEpisodesFromApi();
  }, []);

  return (
    <div className="container nav1">
      <h1 className="100-w text-center">{"Rick & Morty"}</h1>
      <div className="d-flex flex-column">
        <div className="d-flex 100-w">
          <h2 className="pt-3">{"Characters"}</h2>
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

      <div className="d-flex flex-column">
        <div className="d-flex 100-w">
          <h2 className="pt-3">{"Locations"}</h2>
        </div>
        <div className="d-flex 100-w overflow-auto">
          {store.locations.map((location) => {
						return (
							<LocationCard
								key={location.id}
								location={location} />
						)
					})}
        </div>
      </div>

      <div className="d-flex flex-column">
        <div className="d-flex 100-w">
          <h2 className="pt-3">{"Episodes"}</h2>
        </div>
        <div className="d-flex 100-w overflow-auto">
          {store.episodes.map((episode) => {
						return (
							<EpisodeCard
								key={episode.id}
								episode={episode} />
						)
					})}
        </div>
      </div>

    </div>
  );
};
