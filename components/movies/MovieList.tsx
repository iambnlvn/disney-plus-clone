"use client";

import { Result } from "@/types/responseType";
import React, { useRef } from "react";
import MovieItem from "./MovieItem";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const MovieList: React.FC<{ data: string }> = ({ data }) => {
  const movies: Result[] = JSON.parse(data);

  const elementRef = useRef<HTMLDivElement>(null);

  const slideLeft = (element: any) => {
    element.scrollLeft -= 300;
  };

  const slideRight = (element: any) => {
    element.scrollLeft += 300;
  };

  return (
    <>
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className="hidden md:block absolute left-10 my-[92px] text-white text-2xl cursor-pointer"
      />
      <HiChevronRight
        onClick={() => slideRight(elementRef.current)}
        className="hidden md:block absolute right-10 my-[92px] text-white text-2xl cursor-pointer"
      />
      <div
        ref={elementRef}
        className="relative my-3 gap-2 md:gap-0 flex overflow-x-scroll no-scrollbar scroll-smooth"
      >
        {movies.map((movie) =>
          movie.backdrop_path && (
            <MovieItem
              key={movie.id}
              movie={movie}
            />
          )
        )}
      </div>
    </>
  );
};

export default MovieList;
