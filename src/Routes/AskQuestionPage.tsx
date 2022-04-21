import React from "react";
import MainBody from "../component/MainBody";
import Sidebar from "../component/Sidebar";
import UpperNavbar from "../component/UpperNavbar";

function AskQuestionPage() {
  return (
    <div>
      
      <MainBody></MainBody>
      <h1 className="ml-[51vw] mt-[1vw] font-bold">Questions</h1>
      <div className="border-2 h-[37vw]  border-slate-800	 mt-[2vw] ml-[20vw] mr-[6vw]  ">
        <form>
          <div className="mb-6 mt-5 mx-10  ">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
             Title{" "}
              <input
                type="text"
                id="large-input"
                className="block p-2 mt-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
          </div>
          <div className="mb-6 mx-10 ">
            <label className="block text-sm mt-3 font-bold text-gray-900 dark:text-gray-300">
              Body{" "}
              <span 
                className="block p-4 mt-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
             <textarea className="block h-[10vw]	mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

            </label>
          </div>
          <div className="mb-6 mx-10 ">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Tags{" "}
              <input
                type="text"
                className="block p-2 text-gray-900 mt-3 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              
            </label>
          </div>
          <button className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border border-slate-700  ml-[62vw] mt-[1vw] rounded-md">
          Post Question
</button>
        
        </form>
      </div>
    </div>
  );
}

export default AskQuestionPage;
