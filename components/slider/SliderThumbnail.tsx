"use client";

import { ApiResponse } from "@/types/responseType";
import Image from "next/image";
import React, { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const SliderThumbnail: React.FC<{ data: string }> = (props) => {
  const windowWidth = globalThis.window?.innerWidth;

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  const elementRef = useRef<HTMLDivElement>(null);

  const slideLeft = (element: any) => {
    element.scrollLeft -= windowWidth - 110;
  };
  const slideRight = (element: any) => {
    element.scrollLeft += windowWidth - 113;
  };
  const data: ApiResponse = JSON.parse(props.data);
  return (
    <>
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className="hidden md:block absolute left-10 mt-[164px] text-white text-2xl cursor-pointer"
      />
      <HiChevronRight
        onClick={() => slideRight(elementRef.current)}
        className="hidden md:block absolute right-10 mt-[164px] text-white text-2xl cursor-pointer"
      />
      <div
        className="w-full px-16 py-6 flex overflow-x-scroll no-scrollbar scroll-smooth"
        ref={elementRef}
      >
        {data.results.map((movieElement) => (
          <Image
            className="min-w-full md:h-[310px] object-cover md:object-fill mr-4 md:apect-video rounded-lg cursor-pointer hover:border-2 border-gray-400 transition-all duration-100 ease-in"
            key={movieElement.id}
            src={imageBaseUrl + movieElement.backdrop_path}
            height={120}
            width={220}
            loading="eager"
            quality={100}
            alt={movieElement.title}
          />
        ))}
      </div>
    </>
  );
};

export default SliderThumbnail;
