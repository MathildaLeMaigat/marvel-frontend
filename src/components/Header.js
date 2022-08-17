import { Link } from "react-router-dom";
import logo from "../assets/img/marvel.logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <Link to="/characters">
        <img src={logo} alt="logo" />
      </Link>

      <Link to="/characters">
        <p>Personnages</p>
      </Link>
      <Link to="/comics">
        <p>Comics</p>
      </Link>

      <Link to="/favoris">
        <p>Favoris</p>
      </Link>

      {!userToken ? (
        <>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="signup">
            <button>Sign Up</button>
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
