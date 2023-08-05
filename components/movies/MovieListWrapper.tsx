import { fetchData } from "@/services/api";
import MovieList from "./MovieList";

const MovieListWrapper: React.FC<{ data: string }> = async (props) => {
  const { results } = await fetchData(props.data);
  const stringifiedResults = JSON.stringify(results);
  return (
    <div className="my-3 gap-2 md:gap-0 flex overflow-x-scroll no-scrollbar">
      <MovieList data={stringifiedResults} />
    </div>
  );
};

export default MovieListWrapper;
