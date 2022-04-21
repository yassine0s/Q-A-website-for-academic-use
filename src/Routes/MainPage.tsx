import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import UpperNavbar from "../component/UpperNavbar";
import MainBody from "../component/MainBody";
import DepartmentsComp from "../component/DepartmentsComp";
import Departments from "./Departments/Departments";
import axios from "axios";
import Question from "../component/Question";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      {" "}
      <MainBody></MainBody>
      <div className="flex ">
        {" "}
        <div className="font-bold mt-5 text-xl ml-[5vw]">All questions</div>
        <Link  to={"/AskQuestion"}
          type="button"
          className="text-white  ml-[60vw] right bg-gray-800 hover:bg-gray-500 focus:outline-none mt-5 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Ask question
        </Link>
      </div>
      <div className=" App flex-1 text-3xl font-bold h-full overflow-auto">
        <div className="border-2  border-slate-100	 mt-[2vw] ml-[6vw] mr-[3vw]  ">
          {/* here starts */}
          <div className="divide-y divide-slate-200  ">
            <Question></Question>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
