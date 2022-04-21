import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Question = () => {
  const [question, setQuestion] = useState([
    {
      Question:
        "    Lorem ipsum dolor sit ametlor sit amet consectetur adipisicing elit. Facilis ipsum odio qu consectetur adipisicing elit. Facilis ipsum odio quibusdam maxime cupiditate, a eius veritatis quia omnis nihil necessitatibus nisi molestiae alias. Suscipit dolorem impedit mollitia maxime nihil.",
      QuestionID: 1,
    },
    {
      Question:
        "    Lorem ipsum dolor sit ametlor sit amet consectetur adipisicing elit. Facilis ipsum odio qu consectetur adipisicing elit. Facilis ipsum odio quibusdam maxime cupiditate, a eius veritatis quia omnis nihil necessitatibus nisi molestiae alias. Suscipit dolorem impedit mollitia maxime nihil.",
      QuestionID: 2,
    },
    {
      Question:
        "    Lorem ipsum dolor sit ametlor sit amet consectetur adipisicing elit. Facilis ipsum odio qu consectetur adipisicing elit. Facilis ipsum odio quibusdam maxime cupiditate, a eius veritatis quia omnis nihil necessitatibus nisi molestiae alias. Suscipit dolorem impedit mollitia maxime nihil.",
      QuestionID: 3,
    },
    {
      Question:
        "    Lorem ipsum dolor sit ametlor sit amet consectetur adipisicing elit. Facilis ipsum odio qu consectetur adipisicing elit. Facilis ipsum odio quibusdam maxime cupiditate, a eius veritatis quia omnis nihil necessitatibus nisi molestiae alias. Suscipit dolorem impedit mollitia maxime nihil.",
      QuestionID: 4,
    },
  ]);
  const [votes, setVotes] = useState([
    {
      Vote: "200",
    },
  ]);

  var questions = [];
  for (var i = 0; i < question.length; i++) {
    questions.push(
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
          <Link
            to={"/Answer/" + question[i].QuestionID}
            className="col-span-4 inline-block text-center hover:text-slate-500"
            key={i}
          >
            {question[i].Question}
          </Link>
        </div>
      </div>
    );
  }

  const voteRenderer = () => {
    axios
      .get("url")
      .then((response) => {
        console.log(response.data);
        const votenum = {
          Vote: response.data.Name,
          QuestionID: response.data.ID,
        };
        let getvotes = [...votes, votenum];
        setVotes(getvotes);
      })
      .catch((error) => console.log(error));
  };

  const QuestRenderer = () => {
    axios
      .get("url")
      .then((response) => {
        console.log(response.data);
        const Quest = {
          Question: response.data.Name,
          QuestionID: response.data.ID,
        };
        let getQuest = [...question, Quest];
        setQuestion(getQuest);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    voteRenderer();
    QuestRenderer();
  }, []);
  return <div>{questions}</div>;
};

export default Question;
