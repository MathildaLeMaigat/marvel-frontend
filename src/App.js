import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import Character from "./pages/Character";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
