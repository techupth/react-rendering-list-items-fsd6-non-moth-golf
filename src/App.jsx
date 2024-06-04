import "./App.css";
import moives from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-sectison">
        {moives.map((moives, index) => {
          return (
            <div key={index} className="container">       
              <img src={moives.image} className="img1"></img>
              <main className="content" >
                <p>Title: {moives.title}</p>
                <p>Year:   {moives.year}</p>
                <p>Runtime:  {moives.runtime}</p>
                <p>Genres:   {moives.genres[0]} {moives.genres[1]} {moives.genres[2]}</p>
                <p>IMDB Ratings:  {moives.imdbRating}</p>
                <p>IMDB Votes:  {moives.imdbVotes}</p>
              </main>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
