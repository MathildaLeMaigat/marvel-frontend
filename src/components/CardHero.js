import { Link } from "react-router-dom";

const CardHero = ({ name, photo, description, id }) => {
  return (
    <div className="card-hero">
      <Link className="link-hero" to={`/comics/${id}`}>
        <div>
          <p className="nameHero">{name}</p>

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
