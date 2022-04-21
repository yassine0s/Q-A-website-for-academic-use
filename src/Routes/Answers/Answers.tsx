import React, { useEffect, useState } from "react";
import MainBody from "../../component/MainBody";

import { useParams } from "react-router-dom";
import axios from "axios";

const Answers = () => {
  const { id } = useParams();
  const [answer, setAnswer] = useState([
    {
      Answer:
        "    Lorem ipsum dolor sit ametlor sit amet consectetur adipisicing elit. Facilis ipsum odio qu consectetur adipisicing elit. Facilis ipsum odio quibusdam maxime cupiditate, a eius veritatis quia omnis nihil necessitatibus nisi molestiae alias. Suscipit dolorem impedit mollitia maxime nihil.",
      AnswerID: 1,
    },
    {
      Answer:
        "    Lorem ipsum dolor sit ametlor sit amet consectetur adipisicing elit. Facilis ipsum odio qu consectetur adipisicing elit. Facilis ipsum odio quibusdam maxime cupiditate, a eius veritatis quia omnis nihil necessitatibus nisi molestiae alias. Suscipit dolorem impedit mollitia maxime nihil.",
      AnswerID: 1,
    },
  ]);
var question: string;
  var answers = [];
  for (var i = 0; i < answer.length; i++) {
    answers.push(
      <div>
        <div className="py-12 text-sm grid grid-cols-6 ">
          <div className="row-span-1  relative  w-[7vw] h-[6vw] ml-8 justify-center flex ">
            <div className="grid-row-2">
              <div className=" flex justify-center font-bold">
                <div className="col-span-4">100</div>
              </div>
              <div className="mt-8 ">Votes</div>
            </div>
          </div>
          <div className="col-span-4 inline-block text-center " key={i}>
            {answer[i].Answer}
          </div>
        </div>
      </div>
    );
  }

  const QuestRenderer = () :void =>  {
    axios
      .get("url")
      .then((response) => {
        console.log(response.data);
        question = response.data.Data
      })
      .catch((error) => console.log(error));
  };
  const AnswerRenderer = () :void =>  {
    axios
      .get("url")
      .then((response) => {
        console.log(response.data);
        const ansr = {
          Answer: response.data.Name,
          AnswerID: response.data.ID,
        };
        let getAnswers = [...answer, ansr];
        setAnswer(getAnswers);      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    AnswerRenderer();
    QuestRenderer();
  }, []);
  return (
    <div>
      <MainBody></MainBody>
      <div className="border-2   border-slate-800	 mt-[2vw] ml-[20vw] mr-[6vw]  ">
        <div className=" w-[71vw] w-5 m-5">
          <div className="grid grid-rows-3  grid-flow-col gap-2">
            <div className="row-span-3 relative  w-[8vw] h-[8vw] m-5 "></div>
            <div className="col-span-3 m-5 flex justify-left">
              <h1 className="font-bold">Question Title</h1>
            </div>
            <div className="col-span-3 -mt-5 flex justify-left">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                neque. Sint reiciendis sunt cum nemo, praesentium maxime ducimus
                voluptatum autem. Aliquid vitae consectetur recusandae, quo quas
                ullam dolores. Accusantium, non. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Amet, hic quo exercitationem velit
                excepturi qui vitae numquam id unde sit maiores reprehenderit
                minima quisquam rem non dolor vel quae eaque.
              </h1>
            </div>{" "}
          </div>
          <h1 className="font-bold ml-5">Comments </h1>

          <div className="divide-y divide-slate-200 ml-40 mr-5 ">
            <div className="mt-5 ">Comment</div>
            <div className="mt-5">Comment - UserName</div>
            <div className="mt-5">Comment - UserName</div>
            <br></br>
          </div>
          <h1 className="font-bold mt-5  ml-5">Answers </h1>
          <div className="divide-y divide-slate-500"> {answers}</div>
          <div className="mb-6 mx-10 ">
            <label className="block text-sm mt-3 font-bold text-gray-900 dark:text-gray-300">
              Answer The question{" "}
              <textarea className="block h-[12vw]	mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
              <button className="bg-slate-500 mb-[10vw] w-[8vw] hover:bg-slate-400 text-white font-bold py-2 px-2 border border-slate-700  ml-[58vw] mt-[1vw] rounded-md">
                Post Answer
              </button>{" "}
            </label>
            <br></br> <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
