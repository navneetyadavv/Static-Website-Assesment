import React, { useState, useEffect } from "react";

const Navbar = ({ toggleSidebar }) => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

  return (
    <>
      <div className="h-[100vh]">
        <div
          className={`w-full sticky top-0 z-10 rounded-xl transition-shadow duration-300 px-1 md:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center ${
            hasShadow
              ? "shadow-md bg-white/70 backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-start md:items-center space-x-4">
            <div className="flex flex-col">
              <p className="text-sm text-gray-600">
                Pages{" "}
                <span className="font-semibold text-gray-700 ">/ Dashboard</span>
              </p>
              <h1 className="font-bold text-lg text-gray-700">Dashboard</h1>
            </div>
          </div>
          <div className="flex md:flex-row items-start md:items-center space-y-2 md:space-y-0  gap-1 space-x-0 md:space-x-4 mt-2 md:mt-0">
            <input
              type="text"
              className="py-[.2rem] pl-2  md:pl-3 rounded-lg border-2 w-24 md:w-28 lg:w-48"
              placeholder="Type here..."
            />
            <button
              className="w-32 lg:w-48 px-3 md:w-28 py-2  font-sans text-xs md:text-sm font-bold text-center text-pink-600 border border-pink-600 uppercase align-middle transition-all rounded-lg select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ marginTop: 0 }}
            >
              Online builder
            </button>
            <button
              className="px-4 md:px-2 py-2 md:py-3 font-bold text-center text-gray-600 align-middle transition-all rounded-lg select-none"
              type="button"
              style={{ marginTop: 0 }}
            >
              Sign In
            </button>
            <div
              className="lg:hidden flex flex-col justify-center items-end cursor-pointer space-y-1"
              onClick={handleHamburgerClick}
            >
              <div
                className={`h-[3px] bg-gray-400 rounded transition-all duration-300 ${
                  isSidebarOpen ? "w-4" : "w-6"
                }`}
              />
              <div className="h-[3px] bg-gray-400 rounded w-6" />
              <div
                className={`h-[3px] bg-gray-400 rounded transition-all duration-300 ${
                  isSidebarOpen ? "w-4" : "w-6"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
