import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EpisodeCard = ({episode}) => {
  const {store, actions} = useContext(Context);
  return (
    <div className="card" style={{ minWidth: "18rem", maxWidth:"18rem" }}>
      <img src={`https://www.verance.com/app/uploads/2017/01/400x200.png`} className="card-img-top" alt="..." />
      <div className="card-body" style={{ backgroundColor: "white" }}>
        <h5 className="card-title" style={{ backgroundColor: "white" }}><strong style={{ backgroundColor: "white" }}>{"Name: "}</strong>{episode.name}</h5>
        <ul className="card-text" style={{ backgroundColor: "white" }}>
        <li style={{ backgroundColor: "white" }}><strong style={{ backgroundColor: "white" }}>{"Air Date: "}</strong>{episode.air_date}</li>
        <li style={{ backgroundColor: "white" }}><strong style={{ backgroundColor: "white" }}>{"Episode: "}</strong>{episode.episode}</li>
        </ul>
        <div className="d-flex justify-content-between" style={{ backgroundColor: "white" }}>
          <Link 
              to={`/episodes/${episode.name.replaceAll(" ", "-").toLowerCase()}/${episode.id}`}
              className="btn btn-primary"
              state={{
                episode: episode
              }}>
                {"See more"}
          </Link>
          <button
            onClick={() => actions.toggleEpisodeCollected(episode)}
            className={(store.collected.find(
              (_episode) => _episode.url === episode.url
            ) !== undefined) ? "btn btn-success" : "btn btn-danger"}>
            <i style={{
              backgroundColor: "var(--btn-bg-color)",
              color: "var(--btn-text-color)"
            }} className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

EpisodeCard.propTypes = {
  episode:PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      air_date: PropTypes.string,
      episode:PropTypes.string,
      characters: PropTypes.arrayOf(PropTypes.string),
      url:PropTypes.string,
      created:PropTypes.string
  })
}