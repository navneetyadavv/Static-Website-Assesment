import React from "react";
import rocket from "../../public/rocket-white.webp";
import BarChart from "./BarChart";
import ProjectList from "./ProjectList";
import OrdersOverview from "./OrdersOverview";
import StatsCard from "./StatsCard";
import { FaShoppingCart, FaCoins } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs";
import SalesOverviewChart from "./SalesOverviewChart";
import InfoCard from "./InfoCard";

const stats = [
  {
    title: "Today's Money",
    value: "$53,000",
    percentage: "+55%",
    icon: FaCoins,
    percentageColor: "text-green-500",
  },
  {
    title: "Today's Users",
    value: "23,00",
    percentage: "+3%",
    icon: FaEarthAmericas,
    percentageColor: "text-green-500",
  },
  {
    title: "New Clients",
    value: "+3,462",
    percentage: "-3%",
    icon: BsAwardFill,
    percentageColor: "text-red-600",
  },
  {
    title: "Sales",
    value: "$103,430",
    percentage: "+5%",
    icon: FaShoppingCart,
    percentageColor: "text-green-500",
  },
];

const Dashboard = () => {
  return (
    <div className="w-full ml-64 py-6 top-32 right-0 absolute">
      <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-2">
        {stats.map((stat, index) => (
          <InfoCard
            key={index}
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
            icon={stat.icon}
            percentageColor={stat.percentageColor}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-4 pt-6">
        <div className="bg-gray-50 p-2 h-auto xl:col-span-7  lg:col-span-1 shadow-md rounded-xl md:h-auto">
          <div className="inherit-full flex xl:flex-row flex-col justify-between p-3 items-center">
            <div className="pr-4 w-full">
              <p className="font-semibold text-gray-500 py-2">
                Built by developers
              </p>
              <p className="font-extrabold text-2xl text-gray-700 py-2">
                Soft UI Dashboard
              </p>
              <p className="xl:mb-24 mb-10 text-gray-500">
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </p>
              <p className=" text-gray-400 font-semibold xl:pb-0 pt-6 pb-10">
                Read More
              </p>
            </div>
            <div className="relative w-full md:h-full sm:h-full flex justify-center items-center gradient-background rounded-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-wave-image bg-cover bg-center"></div>
              <img
                className="object-cover object-top w-full h-full rounded-xl"
                src={rocket}
                alt="Rocket"
              />
            </div>
          </div>
        </div>
        <div className="relative p-6 overflow-hidden xl:col-span-5 lg:col-span-1 shadow-md rounded-xl">
          <div className="absolute inset-0 p-5 w-full rounded-xl">
            <div className="w-full h-full bg-cover bg-end bg-custom-image rounded-xl"></div>
          </div>
          <div className="relative flex flex-col items-start justify-evenly glass-effect rounded-xl p-6 h-full">
            <p className="font-extrabold text-2xl pb-6">
              Work with the rockets
            </p>
            <p className="pb-6">
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who takes the opportunity first.
            </p>
            <p>Read More</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-4 pt-6">
        <div className="bg-white p-4 h-[27rem] xl:col-span-5 lg:col-span-1 shadow-md rounded-xl">
          <div className="h-full w-full flex-row justify-center items-center">
            <BarChart></BarChart>
            <div className="text-gray-800 than pt-6 pb-6 last weekpt-4 pl-2">
              <h1 className="font-bold text-xl">Active Users</h1>
              <p>
                <span className="font-bold text-xs">(+23%) </span>than last week
              </p>
            </div>
            <div className="flex items-center justify-center">
              <StatsCard />
            </div>
          </div>
        </div>
        <div className="p-6 h-[27rem] xl:col-span-7 lg:col-span-1 shadow-md rounded-xl overflow-hidden">
          <SalesOverviewChart></SalesOverviewChart>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-12 gap-4 pt-6">
        <div className="bg-white p-6 h-auto xl:col-span-8 lg:col-span-3 shadow-md rounded-xl overflow-hidden">
          <ProjectList></ProjectList>
        </div>
        <div className="bg-white p-6 xl:col-span-4 shadow-md lg:col-span-3 rounded-xl">
          <OrdersOverview></OrdersOverview>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
