import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Cookies from "js-cookie";

const CardHero = ({ character, photo, id, name, description, fav }) => {
  const [isFav, setIsFav] = useState(
    new RegExp(id).test(Cookies.get("characFav")) || false
  );

  const handleClickFav = () => {
    if (Cookies.get("characFav")) {
      let cookie = Cookies.get("characFav");
      cookie = `${cookie};_;${name};-;${description};-;${photo};-;${id}`;
      Cookies.set("characFav", cookie, { expires: 50000 });
      setIsFav(true);
    } else {
      Cookies.set("characFav", `${name};-;${description};-;${photo};-;${id}`, {
        expires: 50000,
      });
      setIsFav(true);
    }
  };

  const handleClickUnfav = () => {
    let cookie = Cookies.get("characFav");
    let cookieTab = cookie.split(";_;");
    const index = cookieTab.indexOf(
      `${name};-;${description};-;${photo};-;${id}`
    );
    cookieTab.splice(index, 1);
    const newCookie = cookieTab.join(";_;");
    Cookies.set("characFav", newCookie, { expires: 50000 });
    setIsFav(false);
    if (Cookies.get("characFav") === "") {
      Cookies.remove("characFav");
    }
  };
  return (
    <div className="card-hero">
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

      <Link className="link-hero" to={`/comics/${id}`}>
        <div>
          <div className="bloc-name">
            <p className="nameHero">{name}</p>
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
