// Imports
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Favoris = () => {
  // const parsedTabFav = JSON.parse(Cookies.get("Charac-Fav") || "[]");
  // console.log(parsedTabFav);

  const parsedTabFav = [];
  return (
    <div className="container">
      <h1>Your Favorites</h1>
      <div className="container-card">
        {parsedTabFav.map((character, index) => {
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
    </div>
  );
};

export default Favoris;
