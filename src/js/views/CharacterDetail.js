import React, { useEffect,useState } from "react";
import { useParams } from "react-router";

export const CharacterDetail = (props) => {
    const {characterName, characterId} = useParams();

    const BASE_API_URL = "https://rickandmortyapi.com/api"

    const [character,setCharacter] = useState();

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3,
                margin: 10,
            }}
        />
    );

    async function getThisCharacterFromApi(){
        try {
            const response = await fetch(`${BASE_API_URL}/character/${characterId}`);
            const body = await response.json();
            if (!response.ok) throw new Error(`${body}`);
            setCharacter(body)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getThisCharacterFromApi();
    },[])

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    {(character !== undefined) && (<img src={character.image} style={{height:"400px",width:"600px"}}/>)}
                </div>
                <div className="col">
                    {(character !== undefined) && (<h2 className="card-name">{`${character.name}`}</h2>)}
                    {(character !== undefined) && (<h5 className="card-description">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</h5>)}
                </div>
            </div>
            <div className="row">
            <ColoredLine color="red"/>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Name"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.name}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Status"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.status}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Species"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.species}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Location"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.location.name}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Gender"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.gender}`}</p>
                    )}
                </div>
                <div className="col card-mini-cols">
                    {(character !== undefined) && (
                        <h6>{"Origin"}</h6>
                    )}
                    {(character !== undefined) && (
                        <p>{`${character.origin.name}`}</p>
                    )}
                </div>
            </div>
        </div>
    );
}