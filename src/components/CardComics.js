// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";

const CardComics = ({ name, photo, description, id, fav }) => {
  const [isFav, setIsFav] = useState(
    new RegExp(id).test(Cookies.get("comicFav")) || false
  );

  const handleClickFav = () => {
    if (Cookies.get("comicFav")) {
      let cookie = Cookies.get("comicFav");
      cookie = `${cookie};_;${name};-;${description};-;${photo};-;${id}`;
      Cookies.set("comicFav", cookie, { expires: 50000 });
      setIsFav(true);
    } else {
      Cookies.set("comicFav", `${name};-;${description};-;${photo};-;${id}`, {
        expires: 50000,
      });
      setIsFav(true);
    }
  };

  const handleClickUnfav = () => {
    let cookie = Cookies.get("comicFav");
    let cookieTab = cookie.split(";_;");
    const index = cookieTab.indexOf(
      `${name};-;${description};-;${photo};-;${id}`
    );
    cookieTab.splice(index, 1);
    const newCookie = cookieTab.join(";_;");
    Cookies.set("comicFav", newCookie, { expires: 50000 });
    setIsFav(false);
    if (Cookies.get("comicFav") === "") {
      Cookies.remove("comicFav");
    }
  };
  // console.log(elem);
  return (
    <div className="card-comics">
      <div className="heart-div">
        {fav &&
          (isFav ? (
            <div className="heart" onClick={handleClickUnfav}>
              <FontAwesomeIcon icon="heart" />
            </div>
          ) : (
            <div className="heart2" onClick={handleClickFav}>
              <FontAwesomeIcon icon="heart" />
            </div>
          ))}
      </div>
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
