import { fetchData } from "@/services/api";
import SliderThumbnail from "./SliderThumbnail";
import { trending } from "@/constants/genres";
const trendingUrl = trending.url;
const Slider = async () => {
  const data = await fetchData(trendingUrl);
  const trending = JSON.stringify(data);
  return (
      <SliderThumbnail data={trending} />
  );
};

export default Slider;
