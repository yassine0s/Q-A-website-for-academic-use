import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainBody from "../../component/MainBody";

const TeacherDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pict, setPict] = useState("");
  const [info, setInfo] = useState("");
  useEffect(() => {
    axios
      .get("url")
      .then((response) => {
    //   get the teacher data
       
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {" "}
      <MainBody></MainBody>
      <div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 ">
            {" "}
            <div className="border-4 fixed h-[39vw] w-[26vw] ml-5 m-4">
              <div className=" flex justify-center mt-20">
                  <div className="border " style={{width: 200, height: 200, borderRadius: 400/ 2}}></div>
                <img src={pict}></img>
              </div>
              <div className=" flex  justify-center mt-[8vw]">
                userName and shit
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-2 ...">
            <div className="border-4  m-4  h-[10vw] ">sasd</div>
          </div>
          <div className="row-span-2 col-span-2 ...">
            <div className="border-4 m-4 h-[25vw] ">sasd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
