import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ({ handleToken, errorMessage, setErrorMessage }) => {
  // STATES
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // console.log("handletoken", handleToken);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://marvel-backend-math.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );
      // console.log(response.data.token);

      if (response.data) {
        // console.log("victory!");
        handleToken(response.data.token);
        navigate("/characters");
      }
      // console.log(handleToken);
    } catch (error) {
      console.log({ error: error.response });
      console.log("catch", error);
      if (error.response.status === 409) {
        setErrorMessage("Sorry! this email already exists");
      }
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form className="signup-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button className="signup-button">Subscribe</button>
        {/* <input type="submit" value="Subscribe" /> */}
      </form>
    </div>
  );
};

export default SignUp;
