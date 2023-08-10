import favDevice from "@/public/assets/Images/favdevice.webp";
import entertainment from "@/public/assets/Images/entertainment.webp";
import parentalControl from "@/public/assets/Images/parentalcontrol.webp";
import Feature from "./Feature";

const Overview = () => {
  const features = [{
    title: "The greatest stories ever told",
    content:
      "Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic, plus general entertainment from Star.",
    image: entertainment,
  }, {
    title: "Experience Disney+ in Arabic",
    content:
      "Thousands of hours of TV series, movies and originals from all the wonderful worlds of Disney+.",
    image: favDevice,
  }, {
    title: "Easy-to-use parental controls",
    content: "Keep your family safe with our intuitive parental controls.",
    image: parentalControl,
  }];

  return (
    <div className="bg-[#0f1014] w-full flex gap-2 md:gap-4 pb-10">
      {features.map((feature, idx) => (
        <Feature
          key={idx}
          image={feature.image}
          title={feature.title}
          content={feature.content}
        />
      ))}
    </div>
  );
};

export default Overview;
