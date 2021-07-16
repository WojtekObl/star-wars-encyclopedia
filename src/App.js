import PlanetDisplay from "./Components/MoviesDisplay";
import { ReactComponent as Logo } from "./Assets/LOGO.svg";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Logo className="app__header" />
        <PlanetDisplay />
      </div>
    </div>
  );
}

export default App;
