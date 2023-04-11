import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";


export const CharacterDetail = (props) => {
    const BASE_API_URL = "https://rickandmortyapi.com/api";
    const location = useLocation();
    const [character, setCharacter] = useState();
    const {characterName, characterId} = useParams();
    async function getThisCharacterFromApi() {
        try {
            const response = await fetch(
                `${BASE_API_URL}/character/${characterId}`
            );
            const body = await response.json()
            if (!response.ok) throw new Error(
                `>>> ERROR: ${body}`
        );
        setCharacter(body); 
        } catch(error) {
            console.log(error);
        }
    };
    useEffect(()=> {
        if ("state" in location && location.state !== null && "character" in location.state) {
            setCharacter(location.state.character);
        } else {
        getThisCharacterFromApi()
        }
    }, []);
    return (
        <div className="container">
            <h2>{`hello character with name ${characterName} and id ${characterId}`}</h2>
            {(character !== undefined) && (<img src={character.image} className="w-50 h-auto" />)}
            {(character !== undefined) && (<p>{`this is the species: ${character.species}`}</p>)}
        </div>
    );
};
