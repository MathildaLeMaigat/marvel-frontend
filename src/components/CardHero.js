const CardHero = ({ name, photo, description }) => {
  return (
    <div className="card-hero">
      <div>
        <div className="nameHero">{name}</div>
        <div className="container-img">
          <img className="imgHero" src={photo} alt="card-hero" />
        </div>
        <div className="desc-container">
          <div className="descriptionHero">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
