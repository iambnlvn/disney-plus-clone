"use client";
import Image from "next/image";
import { producers } from "@/constants/producers";
const Producers = () => {
  return (
    <div className="w-full flex gap-2 md:gap-4 px-6 md:px-16">
      {producers.map((producer) => (
        <div
          key={producer.id}
          className="border-2 border-gray-600 rounded-lg cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out shadow-xl shadow-gray-800"
        >
          <video
            className="absolute opacity-0 hover:opacity-50 rounded-md"
            src={producer.videoUrl}
            playsInline
            autoPlay
            muted
            loop
            controls={false}
          />
          <Image
            className="w-full z-1"
            src={producer.image}
            height={160}
            width={280}
            alt="Producer"
          />
        </div>
      ))}
    </div>
  );
};

export default Producers;
