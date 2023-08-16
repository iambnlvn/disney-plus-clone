import Image from "next/image";
import towatch from "@/public/assets/Images/overview.webp";
import exclusive from "@/public/assets/Images/exclusive.webp";
const Discover = () => {
  return (
    <>
      <section className="flex flex-col gap-4 items-center text-center py-14">
        <h1 className="text-2xl font-bold text-neutral-300 md:text-3xl md:tracking-wide">
          Watch the way you want
        </h1>
        <p className="text-[#656b7f] text-md font-medium">
          Discover the world&apos;s greatest stories, all in one place.
        </p>
        <Image
          className="px-12 md:px-20 py-2 bg-transparent"
          src={towatch}
          alt="overview"
        />
      </section>
      <section className="flex flex-col gap-4 text-center items-center pt-4 pb-8">
        <h1 className="text-2xl font-bold text-neutral-300 md:text-3xl md:tracking-wide">
          Exclusive originals
        </h1>
        <p className="text-[#656b7f] text-md font-medium px-6">
          TV series, movies and documentaries you can&apos;t see anywhere else, from
          the world&apos;s greatest storytellers.
        </p>
        <Image
          className="w-full px-10 lg:px-28"
          src={exclusive}
          alt="exclusive"
        />
      </section>
    </>
  );
};

export default Discover;
