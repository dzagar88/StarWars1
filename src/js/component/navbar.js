import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const context = useContext(Context);
  return (
    <nav className="navbar navbar-light mb-3 px-3 nav1">
      <span className="navbar-brand mb-0 h1 p-3">
        <img
          src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png"
          height="75px"
          width="250px"
        ></img>
      </span>
      <div className="ml-auto p-2">
        <Link to="/" className="btn btn-primary">
          {"Back to Home"}
        </Link>
        <div className="dropdown pt-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {"Favorites"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {context.store.collected.map((character) => {
              return (
                <li key={character.id}>
                  <a className="dropdown-item" href="#" style={{ backgroundColor: "white" }}>
                    {character.name} <i onClick={()=> context.actions.toggleCollected(character)} class="fas fa-trash-alt"></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
