import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import Cookies from "js-cookie";

const CardHero = ({ character, photo, id, name, description, handleFav }) => {
  return (
    <div className="card-hero">
      <FontAwesomeIcon
        icon="heart"
        className="heart"
        onClick={() => {
          handleFav(character);
        }}
      />
      <Link className="link-hero" to={`/comics/${id}`}>
        <div>
          <div className="bloc-name">
            <p className="nameHero">{character.name}</p>
          </div>
          <div className="container-img">
            <img className="imgHero" src={photo} alt="card-hero" />
          </div>
          <div className="desc-container">
            {description ? (
              <div className="descriptionHero">{description}</div>
            ) : (
              <p className="nodescription">No description</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardHero;
