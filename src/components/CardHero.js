import { Link } from "react-router-dom";

const CardHero = ({ name, photo, description, id }) => {
  return (
    <div className="card-hero">
      <Link className="link-hero" to={`/character/comics/${id}`}>
        <div className="nameHero">{name}</div>
        <div className="container-img">
          <img className="imgHero" src={photo} alt="card-hero" />
        </div>
        <div className="desc-container">
          {description ? (
            <div className="descriptionHero">{description}</div>
          ) : (
            <p>No description</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CardHero;
