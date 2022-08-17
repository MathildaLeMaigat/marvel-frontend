import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

// Import Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import Character from "./pages/Character";
import Favoris from "./pages/Favoris";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  // Ce state va prendre la valeur du cookie si celui-ci
  // est enregistré . Sije ne trouve pas de cookie ayant pour valeur "userToken" il sera egale a "null"
  const [userToken, setUserToken] = useState(Cookies.get("userToken" || null));

  // fonction a laquelle lorsque je lui donne quelque chose (token) elle
  // l'enregistre en tant que userToken
  const handleToken = (token) => {
    if (token) {
      // Nom,valeur,expire
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      // Nom du token a supprimer
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <div className="app">
      <Router>
        <Header handleToken={handleToken} userToken={userToken} />
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:id" element={<Character />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route
            path="/signup"
            element={<SignUp handleToken={handleToken} />}
          />
          <Route path="/login" element={<LogIn handleToken={handleToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
