import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Import Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import Character from "./pages/Character";
import Favoris from "./pages/Favoris";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

// FONT AWESOME
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// library.add(faMagnifyingGlass);

function App() {
  // fonction a laquelle lorsque je lui donne quelque chose (token) elle l'enregistre en tant que userToken
  const handleToken = (token) => {
    if (token) {
      // Nom,valeur,expire
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      // Nom du token a supprimer
      Cookies.remove("userToken");
    }
  };
  // console.log(handleToken);

  return (
    <div className="app">
      <Router>
        <Header handleToken={handleToken} />
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
