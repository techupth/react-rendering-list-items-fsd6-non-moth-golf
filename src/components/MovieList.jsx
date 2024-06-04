import movies from "../data/movies";

function MovieList() {
  return (
    <>
      <h1 className="flex justify-center font-bold text-4xl my-12">
        Movie List Section
      </h1>
      {movies.map((movie, index) => (
        <section className="flex justify-center my-5">
          <div className="w-[400px] h-[250px] flex flex-row gap-2 rounded-lg bg-base-100 shadow-xl p-3">
            <figure>
              <img
                src={movie.image}
                alt="Movie"
                className="w-[102px] h-[100px] rounded-lg"
              />
            </figure>
            <div key={index} className="flex flex-col gap-2">
              <h2 className="text-xl">Title: {movie.title}</h2>
              <h2 className="text-xl">Year: {movie.year}</h2>
              <h2 className="text-xl">Runtime: {movie.runtime}</h2>
              <h2 className="text-xl flex flex-row gap-2">
                Genres:
                {movie.genres.map((genre, index) => {
                  return index < 2 ? (
                    <div key={index}>
                      <div className="bg-[#EAAC99] rounded-lg px-2">
                        {genre}
                      </div>
                    </div>
                  ) : null;
                })}
              </h2>
              <h2 className="text-xl">IMDB Rating: {movie.imdbRating}</h2>
              <h2 className="text-xl">IMDB Votes: {movie.imdbVotes}</h2>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default MovieList;
