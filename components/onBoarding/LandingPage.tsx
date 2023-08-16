import Image from "next/image";
import disneyBg from "@/public/assets/Images/disney-plus-bg.webp";
import logo from "@/public/assets/Images/logo.png";

const LandingPage = () => {
  return (
    <section className="relative">
      <Image
        className="w-full md:h-full h-screen object-cover"
        src={disneyBg}
        alt="Disney movies"
        loading="eager"
        priority
      />
      <header className="absolute top-7 flex gap-3 items-center right-4 md:right-8 lg:right-12">
        <div className="bg-neutral-900 rounded-lg ml-7 text-md">
          <label className="hidden sm:inline-block font-bold text-white px-1 mr-4">
            Choose language
          </label>
          <select className="bg-neutral-900 border-none focus:ring-0 text-white font-semibold rounded-lg">
            <option className="" value="english">English</option>
            <option value="french">French</option>
          </select>
        </div>
        <button className="bg-gradient-to-r from-[#4359d6] to-[#062895] text-white font-semibold rounded-lg px-7 py-2 hover:scale-105 transition-all duration-100 ease-in">
          Log in
        </button>
      </header>
      <div className="absolute bottom-16 md:bottom-24 lg:bottom-40 w-full flex flex-col items-center gap-4">
        <Image
          className="w-80"
          src={logo}
          alt="Disney"
        />
        <h1 className="text-gray-200 text-2xl tracking-wide font-bold text-center">
          Stream Disney+ Originals, latest series & blockbuster movies
        </h1>
        <button className="flex items-center bg-gradient-to-r from-[#4359d6] to-[#062895] text-white text-xl rounded-lg px-20 md:px-28 py-4 hover:scale-105 transition-all duration-100 ease-in font-bold">
          Sign Up Now-full
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
