import { IconType } from "react-icons";

interface HeaderItemProps {
  name: string;
  Icon: IconType;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
  name,
  Icon,
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer text-white text-md font-semibold hover:underline hover:underline-offset-8 space-y-2">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};
export default HeaderItem;
