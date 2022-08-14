import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
