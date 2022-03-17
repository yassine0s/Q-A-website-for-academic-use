import React from "react";
import Sidebar from "../component/Sidebar";
import UpperNavbar from "../component/UpperNavbar";
import MainBody from "../component/MainBody";

function MainPage() {
  return (
      <div className=" App flex-1 text-3xl font-bold h-screen">
        <UpperNavbar />
        <Sidebar />
      </div>
  );
}

export default MainPage;
