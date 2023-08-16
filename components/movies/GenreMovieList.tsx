import { movieGenres } from "@/constants/genres";
import MovieListWrapper from "./MovieListWrapper";

const GenreMovieList = () => {
  return (
    <div className="mt-1">
      {movieGenres.map((genre) => (
        <div
          key={genre.title}
          className="px-6 md:px-16 my-3 md:my-4"
        >
          <h1 className="text-lg md:text-xl font-bold text-white">
            {genre.title}
          </h1>
          <MovieListWrapper data={genre.url} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
