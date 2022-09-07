import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = ({ handleToken, errorMessage, setErrorMessage }) => {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Empeche le rafraichissement auto de la page
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://marvel-backend-math.herokuapp.com/user/login",
        {
          // j'envoie une cle email/pw avec le state email/pw
          email: email,
          password: password,
        }
      );
      // console.log(response.data);
      if (response.data) {
        // console.log("victory!");
        handleToken(response.data.token);
        navigate("/characters");
      }
    } catch (error) {
      console.log({ error: error.response });
      if (error.response.status === 401)
        setErrorMessage("Sorry! your email/password are incorrects");
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form className="login-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button className="signin-button">Log In</button>
      </form>
    </div>
  );
};
export default LogIn;
