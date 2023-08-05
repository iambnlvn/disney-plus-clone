"use client";
import logo from "@/public/assets/Images/logo.png";

import Image from "next/image";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
const Header = () => {
  const [toggled, setIsToggled] = useState(false);
  const menu = [{
    name: "HOME",
    icon: HiHome,
  }, {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  }, {
    name: "WATCH LIST",
    icon: HiPlus,
  }, {
    name: "ORIGINALS",
    icon: HiStar,
  }, {
    name: "MOVIES",
    icon: HiPlayCircle,
  }, {
    name: "SERIES",
    icon: HiTv,
  }];
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex gap-2 items-center">
        <Image
          className="object-cover cursor-pointer"
          src={logo}
          height="110"
          width="150"
          alt="Disney"
        />
        <div className="hidden md:flex gap-6">
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
            />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map((item, idx) =>
            idx < 3 && (
              <HeaderItem
                key={item.name}
                name={""}
                Icon={item.icon}
              />
            )
          )}
          <div className="md:hidden" onClick={() => setIsToggled(!toggled)}>
            <HeaderItem
              name=""
              Icon={HiDotsVertical}
            />
            {toggled && (
              <div className="absolute mt-2 bg-neutral-900 border-[1px] border-neutral-700 px-5 py-3">
                {menu.map((item, idx) =>
                  idx > 2 && (
                    <HeaderItem
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {
        /*  <Image
        className="rounded-full"
        src={""}
        width={39}
        height={39}
        alt="user"
      /> */
      }
    </div>
  );
};

export default Header;
