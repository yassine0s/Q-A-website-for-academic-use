import React, { useEffect, useState } from "react";
import MainBody from "../component/MainBody";
import DepartmDropdown from "../component/DepartmDropdown";
import SubjDropdown from "../component/SubjDropdown";
import axios from "axios";

const AskQuestionPage: React.FC = () => {
  const [depID, setDepID] = useState("");
  const [subID, setSubID] = useState("");
  const [Question, SetQuestion] = useState("");
  const [title, Settitle] = useState("");

  const departementid = (depID: React.SetStateAction<string>) => {
    setDepID(depID);
    console.log(depID);
  };
  const subjectid = (subID: React.SetStateAction<string>) => {
    setSubID(subID);
    console.log(subID);

  }
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
      axios
        .post("http://localhost:8080/api/question", {
          content: Question,
          user: "yassin@gmail.com",
          department_id: depID,
          subject_id: subID,
          title:title,
        })
        .then((response) => {
          alert('Question Is submitted');
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    console.log(Question);
}
  return (
    <div>
      <MainBody></MainBody>
      <h1 className="ml-[51vw] mt-[1vw] font-bold">Questions</h1>
      <div className="border-2 h-[37vw]  border-slate-800	 mt-[2vw] ml-[20vw] mr-[6vw]  ">
        <form  onSubmit={handleSubmit}>
          <div className="mb-6 mt-5 mx-10  ">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Title{" "}
              <input
              required
              onChange={e=>Settitle(e.target.value)
              }
                type="text"
                id="large-input"
                className="block p-2 mt-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
          </div>

          <div className="mb-6 mx-10 ">
            <label className="block text-sm mt-3 font-bold text-gray-900 dark:text-gray-300">
              Body{" "}
              <span className="block p-4 mt-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div className="grid grid-cols-8">
                  <div>
                    <DepartmDropdown
                      childToParent={departementid}
                    ></DepartmDropdown>
                  </div>
                  <div>
                    <SubjDropdown childToParent={subjectid}></SubjDropdown>
                  </div>
                </div>
              </span>
              <textarea
              required
                onChange={e=>SetQuestion(e.target.value)
                }
                className="block h-[10vw]	mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
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
          <button
            className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border border-slate-700  ml-[62vw] mt-[1vw] rounded-md"
          >
            Post Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestionPage;
