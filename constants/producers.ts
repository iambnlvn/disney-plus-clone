import disney from "@/public/assets/Images/disney.png";
import pixar from "@/public/assets/Images/pixar.png";
import marvel from "@/public/assets/Images/marvel.png";
import natGeo from "@/public/assets/Images/natGeo.png";
import starWars from "@/public/assets/Images/starWars.png";

export const producers = [{
  id: 0,
  image: disney,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1692219327/disney_ff058v.webm",
}, {
  id: 1,
  image: pixar,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1692219327/pixar_xpsrrf.webm",
}, {
  id: 2,
  image: marvel,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1692219331/marvel_q0m6g4.webm",
}, {
  id: 3,
  image: natGeo,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1692219327/natGeo_mmd4cs.webm",
}, {
  id: 4,
  image: starWars,
  videoUrl:
    "https://res.cloudinary.com/dk3zkgj4n/video/upload/v1692219331/starWars_n2pz0d.webm",
}] as const;
