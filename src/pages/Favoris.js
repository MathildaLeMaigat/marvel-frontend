// Imports

const Favoris = ({ favoriteCharac, favoriteComics }) => {
  // console.log("fav", favorite);
  return (
    <div className="container">
      <h1>Your Favorites Characters :</h1>
      <div className="container-card">
        {favoriteCharac.map((character, index) => {
          return (
            <div className="card-hero" key={character._id}>
              <p className="nameHero">{character.name}</p>
              <img
                className="imgHero"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="img-charc"
              />
              <div className="desc-container">
                {character.description ? (
                  <div className="descriptionHero">{character.description}</div>
                ) : (
                  <p className="nodescription">No description</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <h1>Your Favorites Comics :</h1>
      <div className="container-card">
        {favoriteComics.map((elem, index) => {
          return (
            <div className="card-hero" key={elem._id}>
              <p className="nameHero">{elem.name}</p>
              <img
                className="imgHero"
                src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                alt="img-charc"
              />
              <div className="desc-container">
                {elem.description ? (
                  <div className="descriptionHero">{elem.description}</div>
                ) : (
                  <p className="nodescription">No description</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favoris;
