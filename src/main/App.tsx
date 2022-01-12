import { DogSearcher } from "../scene/dog-searcher";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DOGS</h1>
      </header>
      <section>
        <DogSearcher />
      </section>
    </div>
  );
}

export default App;
