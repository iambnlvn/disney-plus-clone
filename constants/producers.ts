import disney from "@/public/assets/Images/disney.png";
import pixar from "@/public/assets/Images/pixar.png";
import marvel from "@/public/assets/Images/marvel.png";
import natGeo from "@/public/assets/Images/natGeo.png";
import starWars from "@/public/assets/Images/starWars.png";

export const producers = [{
  id: 0,
  image: disney,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1690982846/disney_rijvne.mp4",
}, {
  id: 1,
  image: pixar,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1690982851/pixar_qmxooa.mp4",
}, {
  id: 2,
  image: marvel,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1690982844/marvel_btpttw.mp4",
}, {
  id: 3,
  image: natGeo,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1690982852/natGeo_iqfbub.mp4",
}, {
  id: 4,
  image: starWars,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1690982844/starWars_ubcgns.mp4",
}] as const;
