import "./App.css";
import PlanetDisplay from "./Components/MoviesDisplay";



function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__header">Star Wars Encyclopedia</h1>
        <PlanetDisplay/>
      </div>
    </div>
  );
}

export default App;
