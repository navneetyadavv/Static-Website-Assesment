import React, { useState } from "react";
import mainLogo from "../../public/mainLogo.webp";
import { FaTools, FaRocket, FaHouseDamage } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { RiContactsFill, RiBillLine } from "react-icons/ri";
import { SiVirtualbox } from "react-icons/si";
import { MdOutlineAssignment } from "react-icons/md";
import { TbDiamondFilled } from "react-icons/tb";
import curve from "../../public/curve.jpg";

const Sidebar = ({ isOpen }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: FaHouseDamage },
    { name: "Tablets", icon: PiBuildingsFill },
    { name: "Billing", icon: RiBillLine },
    { name: "Virtual Reality", icon: SiVirtualbox },
    { name: "RTL", icon: FaTools },
  ];

  const accountPages = [
    { name: "Profile", icon: RiContactsFill },
    { name: "Sign In", icon: MdOutlineAssignment },
    { name: "Sign Up", icon: FaRocket },
  ];

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div
      className={`w-64 h-[97%] text-black fixed top-0 left-0 m-4 transition-transform transform pl-4 bg-white shadow-2xl rounded-xl ${
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+15px)]"
      } lg:translate-x-0 z-50`}
    >
      <div className="w-[90%] h-20 flex flex-row justify-start gap-3 items-center px-4 border-b-[1px]">
        <div className="h-full w-8 flex justify-center items-center">
          <img src={mainLogo} alt="Main Logo" />
        </div>
        <div className="text-gray-600 font-semibold text-sm">
          Soft UI Dashboard
        </div>
      </div>
      <ul className="overflow-y-auto h-fit">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`p-2 flex justify-start items-center gap-2 rounded-xl text-sm text-gray-500 ${
              selectedItem === item.name
                ? "bg-white shadow-sm text-gray-700 font-semibold"
                : ""
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            <div
              className={`h-10 w-10 shadow-lg ${
                selectedItem === item.name ? "gradient-background" : "bg-white"
              } rounded-lg flex justify-center items-center`}
            >
              <item.icon
                className={`text-md ${
                  selectedItem === item.name ? "text-white" : "text-gray-500"
                }`}
              />
            </div>
            <div className="flex items-center">{item.name}</div>
          </li>
        ))}
        <li className="p-2 text-gray-600 font-semibold text-sm">
          Account Pages
        </li>
        {accountPages.map((item, index) => (
          <li
            key={index}
            className={`p-2 flex justify-start items-center gap-2 rounded-xl text-sm text-gray-500 ${
              selectedItem === item.name
                ? "bg-white text-gray-700 font-semibold"
                : ""
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            <div
              className={`h-10 w-10 shadow-lg ${
                selectedItem === item.name ? "gradient-background" : "bg-white"
              } rounded-lg flex justify-center items-center`}
            >
              <item.icon
                className={`text-md ${
                  selectedItem === item.name ? "text-white" : "text-gray-500"
                }`}
              />
            </div>
            <div className="flex items-center">{item.name}</div>
          </li>
        ))}
      </ul>
      <div
        className="w-[85%] relative h-44 p-4 bg-cover bg-center rounded-xl overflow-hidden mt-14"
        style={{ backgroundImage: `url(${curve})` }}
      >
        <div className="h-full w-full absolute top-0 left-0 bg-blue-900/20 flex flex-col justify-center items-start pl-4">
          <div className="h-10 w-10 rounded-xl bg-white flex justify-center items-center">
            <TbDiamondFilled className="text-2xl text-gray-700 "></TbDiamondFilled>
          </div>
          <div className="w-full fit py-1 mt-2 rounded-xl text-white ">
            <p className="font-bold">Need Help?</p>
            <p className="text-xs font-semibold">Please check our docs</p>
          </div>
          <button
            type="button"
            className="py-1.5 px-5 me-2 mt-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            DOCUMENTATION
          </button>
        </div>
      </div>
      <button
        type="button"
        className="py-2 px-5 me-2 mt-2 mb-2 w-[85%] text-sm text-white font-bold focus:outline-none gradient-background rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100"
      >
        UPGRADE TO PRO
      </button>
    </div>
  );
};

export default Sidebar;
