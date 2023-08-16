"use client";

import { Result } from "@/types/responseType";
import Image from "next/image";
const MovieItem: React.FC<{ movie: Result }> = ({ movie }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group p:2 md:p-4 flex flex-col hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
      <Image
        className="min-w-[180px] md:min-w-[280px] rounded-lg border-2 border-gray-600 hover:border-4 hover:border-gray-400"
        alt={movie.title}
        width={280}
        height={120}
        src={imageBaseUrl + movie.backdrop_path}
      />
      <h2 className="text:sm md:text:lg text-white self-center group-hover:font-bold py-2 clip">
        {movie.title}
      </h2>
    </div>
  );
};

export default MovieItem;
