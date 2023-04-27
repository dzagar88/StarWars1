import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LocationCard = ({location}) => {
  const {store, actions} = useContext(Context);
  return (
    <div className="card" style={{ minWidth: "18rem", maxWidth:"18rem" }}>
      <img src={`https://www.verance.com/app/uploads/2017/01/400x200.png`} className="card-img-top" alt="..." />
      <div className="card-body" style={{ backgroundColor: "white" }}>
        <h5 className="card-title" style={{ backgroundColor: "white" }}><strong style={{ backgroundColor: "white" }}>{"Name: "}</strong>{location.name}</h5>
        <ul className="card-text" style={{ backgroundColor: "white" }}>
        <li style={{ backgroundColor: "white" }}><strong style={{ backgroundColor: "white" }}>{"Type: "}</strong>{location.type}</li>
        <li style={{ backgroundColor: "white" }}><strong style={{ backgroundColor: "white" }}>{"Dimension: "}</strong>{location.dimension}</li>
        </ul>
        <div className="d-flex justify-content-between" style={{ backgroundColor: "white" }}>
          <Link 
              to={`/locations/${location.name.replaceAll(" ", "-").toLowerCase()}/${location.id}`}
              className="btn btn-primary"
              state={{
                location: location
              }}>
                {"See more"}
          </Link>
          <button 
          onClick={() => actions.toggleLocationCollected(location)}
          className={(store.collected.find(
            (_location) => _location.url === location.url
          ) !== undefined) ? "btn btn-success" : "btn btn-danger"}>
              <i style={{ backgroundColor: "lightgray", color: "black" }} className="fas fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

LocationCard.propTypes = {
  location:PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      dimension:PropTypes.string,
      residents: PropTypes.arrayOf(PropTypes.string),
      url:PropTypes.string,
      created:PropTypes.string
  })
}