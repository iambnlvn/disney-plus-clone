import Image, { StaticImageData } from "next/image";
interface DeviceProps {
  title: string;
  image: StaticImageData;
  subDevices: string[];
}
const Device: React.FC<DeviceProps> = ({ title, image, subDevices }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <Image
        className="w-24 h-16 md:w-36 md:h-20 object-contain"
        src={image}
        alt=""
      />
      <h1 className="text-white font-semibold text-lg text-center">{title}</h1>
      <div className="hidden w-full md:flex flex-col gap-y-1 text-center">
        {subDevices.map((device, idx) => (
          <h3 key={idx} className="text-lg text-[#656b7f] font-medium">{device}</h3>
        ))}
      </div>
    </div>
  );
};

export default Device;
