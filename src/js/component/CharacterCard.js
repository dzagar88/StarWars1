import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({character}) => {
  const {store, actions} = useContext(Context);
  return (
    <div className="card" style={{ minWidth: "18rem", maxWidth:"18rem" }}>
      <img src={character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><strong>{"Name: "}</strong>{character.name}</h5>
        <ul className="card-text">
        <li><strong>{"Species: "}</strong>{character.species}</li>
        <li><strong>{"Status: "}</strong>{character.status}</li>
        <li><strong>{"Gender: "}</strong>{character.gender}</li>
        </ul>
        <div className="d-flex justify-content-between">
          <Link 
              to={`/characters/${character.name.replaceAll(" ", "-").toLowerCase()}/${character.id}`}
              className="btn btn-primary"
              state={{
                character: character
              }}>
                {"See more"}
          </Link>
          <button 
          onClick={() => actions.toggleCollected(character)}
          className={(store.collected.find(
            (_character) => _character.id === character.id
          ) !== undefined) ? "btn-success" : "btn-danger"}>
              <i className="fas fa-check-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
    character:PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        status: PropTypes.oneOf(["Dead","Alive", "unknown"]),
        species:PropTypes.string,
        type:PropTypes.string,
        gender: PropTypes.oneOf(["Female","Male","Genderless","unknown"]),
        origin: PropTypes.shape({
            name:PropTypes.string,
            url:PropTypes.string
        }),
        location: PropTypes.shape({
            name:PropTypes.string,
            url:PropTypes.string
        }),
        image: PropTypes.string,
        episode: PropTypes.arrayOf(PropTypes.string),
        url:PropTypes.string,
        created:PropTypes.string
    })
}