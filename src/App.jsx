import "./App.css";
import movies from './data/movies'

function App() {
  return (
    <div className="App">
    <h1>Movie List Section</h1>
      {
        movies.map((data)=>{
          return (
            <section className="movie-list-section">
              <img src={data.image} alt="" width="102px" height="100px"/>
              <div className="content">
                <div className="title">Title: {data.title}</div>
                <div className="year">Year: {data.year}</div>
                <div className="runtime">Runtime: {data.runtime}s</div>
                <div className="genres"><span>Genres: </span>{data.genres.map((name)=><span className="genres-box">{name}</span>)}</div>
                <div className="rating">IMDB Ratings: {data.imdbRating}</div>
                <div className="vote">IMDB Votes: {data.imdbVotes}</div>
              </div>
            </section>
          )
        })
      }
    </div>
  );
}

export default App;
