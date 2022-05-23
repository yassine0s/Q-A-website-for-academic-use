import React from "react";
import { useLocation } from "react-router-dom";
import MainBody from "../../component/MainBody";

const SubjectDetails = () => {

  const { state }:any = useLocation();
  console.log(state)
  return (
    <div>
      <MainBody></MainBody>
      <div className="border-2 h-[40vw]  border-slate-800	 mt-[2vw] ml-[17vw] mr-[3vw]  ">
        <div className="m-5">
          <h1 className="font-bold text-xl"> {state.Name}</h1>
          <br></br>
          <div className="ml-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            reiciendis saepe similique dolore id sed facilis dolor temporibus,
            officia libero. Tenetur, ipsam omnis hic quisquam minima mollitia
            molestiae possimus culpa. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ut quae, exercitationem veniam eligendi maxime qui
            eos in quis doloribus eum quo iusto dolores ex dolore eius alias
            corrupti harum accusamus?
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
