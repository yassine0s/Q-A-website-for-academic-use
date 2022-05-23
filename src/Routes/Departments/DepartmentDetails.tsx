import React from "react";
import { useLocation } from "react-router-dom";
import MainBody from "../../component/MainBody";

const DepartmentDetails = () => {
  const { state }: any = useLocation();
  console.log(state);
  return (
    <div>
      <MainBody></MainBody>
      <div className="border-2 h-[40vw]  border-slate-800	 mt-[2vw] ml-[17vw] mr-[3vw] overflow-auto ">
        <div className="m-5">
          <h1 className="font-bold text-xl"> {state.Name}</h1>
          <br></br>
          <div className="ml-10">{state.departmentDesc}</div>
          <br></br>
          
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;
