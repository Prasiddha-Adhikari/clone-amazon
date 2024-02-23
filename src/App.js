import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home />
      </div>
    </Router>

    //BEM
  );
}

export default App;
