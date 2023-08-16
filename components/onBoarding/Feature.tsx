import Image, { StaticImageData } from "next/image";

interface FeatureProps {
  image: StaticImageData;
  title: string;
  content: string;
}
const Feature: React.FC<FeatureProps> = ({ image, title, content }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-center p-2 md:p-8">
      <Image
        className="w-16 md:w-20 my-8"
        src={image}
        alt={title}
      />
      <h1 className="text-neutral-300 text-sm md:text-3xl font-bold text-center py-1">
        {title}
      </h1>
      <p className="hidden md:block text-[#8f98b2] text-xl font-medium text-center px-2">
        {content}
      </p>
    </div>
  );
};

export default Feature;
