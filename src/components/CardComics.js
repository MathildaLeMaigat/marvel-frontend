const CardComics = ({ name, photo, description }) => {
  return (
    <div className="card-comics">
      <div>
        <div className="titleComics">{name}</div>
        <div className="container-img">
          <img className="imgHero" src={photo} alt="card-comics" />
        </div>
        <div className="desc-container">
          {description ? (
            <div className="descriptionHero">{description}</div>
          ) : (
            <p>No description</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardComics;
