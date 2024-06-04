import "./App.css";
import MovieList from "./components/MovieList.jsx";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <MovieList />
      </section>
    </div>
  );
}

export default App;
