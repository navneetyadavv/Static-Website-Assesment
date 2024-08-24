import React from "react";

const InfoCard = ({ title, value, percentage, icon: Icon, percentageColor }) => {
  return (
    <div className="bg-white p-6 sm:col-span-1 h-24 md:col-span-3 xl:col-span-3 lg:col-span-3 shadow-md rounded-xl flex justify-between">
      <div className="flex flex-col justify-evenly items-start w-full h-full">
        <p className="font-semibold text-sm text-gray-500">{title}</p>
        <h5 className="font-bold text-xl">
          {value} <span className={`text-sm ${percentageColor}`}>{percentage}</span>
        </h5>
      </div>
      <div className="h-full w-16 gradient-background flex justify-center items-center text-white rounded-xl">
        <Icon />
      </div>
    </div>
  );
};

export default InfoCard;
