import { useState } from "react";
import axios from "axios";

const SignUp = ({ handleToken }) => {
  // STATES
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://marvel-backend-math.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );
      // console.log(response.data);
      handleToken(response.data.token);
    } catch (error) {
      console.log({ error: error.message });
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
        />
        <button className="signup-button">Subscribe</button>
        {/* <input type="submit" value="Subscribe" /> */}
      </form>
    </div>
  );
};

export default SignUp;
