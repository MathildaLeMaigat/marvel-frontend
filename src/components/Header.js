import { Link } from "react-router-dom";
import logo from "../assets/img/marvel.logo.png";

const Header = () => {
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
      <Link to="/login">
        <p>Log In</p>
      </Link>

      <Link to="signup">
        <p>Sign Up</p>
      </Link>

      <p>Log Out</p>
    </div>
  );
};

export default Header;
