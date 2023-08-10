import tv from "@/public/assets/Images/tv.webp";
import computer from "@/public/assets/Images/computer.webp";
import mobile from "@/public/assets/Images/mobile.webp";
import Device from "./Device";
import { StaticImageData } from "next/image";
type device = {
  title: string;
  image: StaticImageData;
  subDevices: string[];
};
const devices: device[] = [
  {
    title: "TV",
    image: tv,
    subDevices: [
      "Amazon Fire TV",
      "Android TV",
      "Apple TV",
      "Apple TV",
      "Chromecast",
      "LG TV",
      "Samsung",
    ],
  },
  {
    title: "Computer",
    image: computer,
    subDevices: ["Chrome OS", "Mac OS", "Windows PC"],
  },
  {
    title: "Mobile & Tablet",
    image: mobile,
    subDevices: ["Android", "Phones & Tablets", "iPhone and iPad"],
  },
];

const CompatibleDevices = () => {
  return (
    <>
      <h1 className="text-center text-neutral-300 text-2xl font-bold md:text-4xl md:tracking-wide py-6">
        Compatible Devices
      </h1>
      <section className="w-full grid grid-cols-3 p-3 md:px-24 lg:px-32">
        {devices.map((device, idx) => (
          <Device
            key={idx}
            title={device.title}
            image={device.image}
            subDevices={device.subDevices}
          />
        ))}
      </section>
    </>
  );
};

export default CompatibleDevices;
