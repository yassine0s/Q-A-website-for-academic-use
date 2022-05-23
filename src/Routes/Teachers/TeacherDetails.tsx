import axios from "axios";
import { stat } from "fs";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MainBody from "../../component/MainBody";

const TeacherDetails = () => {
  const { state }: any = useLocation();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pict, setPict] = useState("");
  const [info, setInfo] = useState("");

  return (
    <div>
      {" "}
      <MainBody></MainBody>
      <div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 ">
            {" "}
            <div className="border-4 fixed h-[39vw] w-[26vw] ml-5 m-4">
              <div className=" flex justify-center mt-20 ">
                <img
                  className=" h-[15vw] w-[15vw] rounded-full"
                  src={state.TeacherPict}
                  alt="new"
                ></img>
              </div>
              <div className=" flex  justify-center mt-[8vw] font-bold text-xl">
                {state.TeacherName}
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-2 ...">
            <div className="border-4 flex fixed m-4 w-[54vw] h-[12vw] overflow-y-scroll">
              <div className="m-4 font-bold text-xl ">
                BIO<br></br>
                <div className="mt-5 text-sm font-light 	 ">
                  {" "}
                  {state.TeacherBio}
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 ...">
            <div className="border-4 flex fixed ml-4 mt-[13vw] w-[54vw] h-[25vw] overflow-y-scroll ">
              {" "}
              <div className="m-4 font-bold text-xl">
                Email<br></br>
                <div className="mt-5 text-sm font-light">
                  {" "}
                  {state.TeacherEmail}
                </div>
                <div className="mt-5 font-bold text-xl">
                  Information<br></br>
                  <div className="mt-5 text-sm font-light">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur numquam minima porro placeat quod minus ipsa
                    commodi molestiae veritatis, illo repellat eum ex aut amet
                    optio aliquid obcaecati corporis tempore!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur numquam minima porro placeat quod minus ipsa
                    commodi molestiae veritatis, illo repellat eum ex aut amet
                    optio aliquid obcaecati corporis tempore!{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
