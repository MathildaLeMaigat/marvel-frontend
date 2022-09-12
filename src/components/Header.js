import "./header.css";

import { Link } from "react-router-dom";
import logo from "../assets/img/marvel.logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/characters">
        <img src={logo} alt="logo" />
      </Link>

      <Link to="/characters">
        {location.pathname === "/characters" || location.pathname === "/" ? (
          <p style={{ color: "red" }}>Characters</p>
        ) : (
          <p>Characters</p>
        )}
      </Link>
      <Link to="/comics">
        {location.pathname === "/comics" ? (
          <p style={{ color: "red" }}>Comics</p>
        ) : (
          <p>Comics</p>
        )}
      </Link>

      <Link to="/favoris">
        {location.pathname === "/favoris" ? (
          <p style={{ color: "red" }}>Favorites</p>
        ) : (
          <p>Favorites</p>
        )}
      </Link>

      {!userToken ? (
        <>
          <Link to="/login">
            {location.pathname === "/login" ? (
              <button style={{ color: "red" }}>Log In</button>
            ) : (
              <button>Log In</button>
            )}
          </Link>
          <Link to="/signup">
            {location.pathname === "/signup" ? (
              <button style={{ color: "red" }}>Sign Up</button>
            ) : (
              <button>Sign Up</button>
            )}
          </Link>
        </>
      ) : (
        <button
          className="logout-button"
          onClick={() => {
            handleToken();
            navigate("/characters");
          }}
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default Header;
