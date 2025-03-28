import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex">
      {isMenuOpen && (
        <div className="w-64 flex-shrink-0">
          <SideBar />
          
        </div>
      )}
      <div className="flex-grow overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
