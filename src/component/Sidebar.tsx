import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div
        className={`top-18 bg-slate-500 w-[14vw] h-[42vw] rounded-r-lg float-left overflow-auto `}
      >
        <aside aria-label="Sidebar">
          <ul className="space-y-2">
            <li>
              <Link
                to={"/AskQuestion"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700" 
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                <span className="ml-3">Ask Question</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/Departments"}
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  />
                </svg>
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                >
                  Departments
                </span>
              </Link>
              <ul id="dropdown-example">
                <li>
                  <Link
                    to={"/Subjects"}
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700"
                  >
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Teachers"}
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gre dark:hover:bg-gray-700"
                  >
                    Teachers
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-black-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Report</span>
              </a>
            </li>
            <li>
              <Link
                to={"/TeacherDetails"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Policy</span>
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-black-500 transition duration-75 dark:text-black-400 group-hover:text-black-900 dark:group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
