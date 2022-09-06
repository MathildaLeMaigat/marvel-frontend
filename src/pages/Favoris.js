// Imports
import CardHero from "../components/CardHero";
import CardComics from "../components/CardComics";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import oups from "../assets/img/dead3.png";

const Favoris = ({ name, description, photo, id, favable }) => {
  let tabCookie1 = Cookies.get("characFav");
  if (tabCookie1) {
    tabCookie1 = tabCookie1.split(";_;");
    for (let i = 0; i < tabCookie1.length; i++) {
      tabCookie1[i] = tabCookie1[i].split(";-;");
    }
  }

  let tabCookie2 = Cookies.get("comicFav");
  if (tabCookie2) {
    tabCookie2 = tabCookie2.split(";_;");
    for (let i = 0; i < tabCookie2.length; i++) {
      tabCookie2[i] = tabCookie2[i].split(";-;");
    }
  }

  return (
    <div className="container">
      <h1>Your Favorites Characters :</h1>

      {tabCookie1 ? (
        <div className="container-card">
          {tabCookie1.map((elem, index) => {
            // console.log("tabcookie1", tabCookie1);
            return (
              <CardHero
                fav={true}
                name={elem[0]}
                description={elem[1]}
                photo={elem[2]}
                id={elem[3]}
                key={elem[3]}
              />
            );
          })}
        </div>
      ) : (
        <div className="fav">
          <h3>Sorry you have no fav character yet!</h3>
          <h4>
            Find them all <Link to="/characters">here</Link>
          </h4>
          <img alt="oups" src={oups} className="img-fav" />
        </div>
      )}

      <h1 className="comics-box-fav">Your Favorites Comics :</h1>

      {tabCookie2 ? (
        <div className="container-card">
          {tabCookie2.map((elem, index) => {
            return (
              <CardComics
                fav={true}
                name={elem[0]}
                description={elem[1]}
                photo={elem[2]}
                id={elem[3]}
                key={elem[3]}
              />
            );
          })}
        </div>
      ) : (
        <div className="fav">
          <h3>Sorry you have no fav comic yet!</h3>
          <h4>
            Find them all <Link to="/comics">here</Link>
          </h4>
          <img alt="oups" src={oups} className="img-fav" />
        </div>
      )}
    </div>
  );
};

export default Favoris;
