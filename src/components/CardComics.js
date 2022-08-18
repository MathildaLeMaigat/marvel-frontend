// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardComics = ({ name, photo, description, handleFav2, elem }) => {
  return (
    <div className="card-comics">
      <FontAwesomeIcon
        icon="heart"
        className="heart"
        onClick={() => {
          handleFav2(elem);
        }}
      />
      <div>
        <div className="titleComics">{name}</div>
        <div className="container-img">
          <img className="imgHero" src={photo} alt="card-comics" />
        </div>
        <div className="desc-container">
          {description ? (
            <div className="descriptionHero">{description}</div>
          ) : (
            <p className="nodescription">No description</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardComics;
