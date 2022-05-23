import React, { useEffect, useState } from "react";
import MainBody from "../../component/MainBody";

import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Answers = () => {
  
const handleSubmit = (e:any) => {
  e.preventDefault();
  axios
    .post("http://localhost:8080/api/answer", {
      content: answerText,
      user: "yassin@gmail.com",
      question_id: state.QuestionID,
    })
    .then((response) => {
      alert('Answer Is submitted');
      window.location.reload()
      console.log(response.data);
    })
    .catch((error) => console.log(error));
console.log(answer);
}
const [answerText, SetanswerText] = useState("");

  useEffect(() => {
    AnswerRenderer();
  }, []);
  const AnswerRenderer = () => {
    axios
      .get(`http://localhost:8080/api/answer/get_all/${state.QuestionID}`)
      .then((response) => {
        console.log(response.data);
        const AnswerData = response.data.data.map(
          ({
            _id,
            content,
            user,
            votes,
            question_id,
          }: any) => {
            return {
              Answer: content,
              AnswerID: _id,
              user : user,
              votes: votes,
              QuestionID: question_id,
            };
          }
        );
        // setAnswer(AnswerData);
        setAnswer((prev) => [...prev, ...AnswerData]);
      })
      .catch((error) => console.log(error));
  };
  const { state }: any = useLocation();
  console.log(state);
  const [votes, setVotes] = useState(state.votes); 

   const handleVotesInc=()=> {
    setVotes(votes +1)
  }
  const handleVotesDec=()=> {
    setVotes(votes -1)
  }
  const [answer, setAnswer] = useState([
    {
      Answer:
        "Lorem ipsum dolor sit ametlor sit amet consectetur adipisicing elit. Facilis ipsum odio qu consectetur adipisicing elit. Facilis ipsum odio quibusdam maxime cupiditate, a eius veritatis quia omnis nihil necessitatibus nisi molestiae alias. Suscipit dolorem impedit mollitia maxime nihil.",
      AnswerID: "1",
      user: "yassine",
      votes : 10,
    },
  ]);
  var answers = [];
  for (var i = 0; i < answer.length; i++) {
    answers.push(
      <div>
        <div className="py-12 text-sm grid grid-cols-6 ">
          <div className="row-span-1  relative  w-[7vw] h-[6vw] ml-8 justify-center flex ">
            <div className="grid-row-2">
              <div className=" flex justify-center font-bold">
                <div className="col-span-2">{answer[i].votes}</div>
              </div>
              <div className="mt-8">Votes</div>
            </div>
          </div>
          <div className="col-span-4 inline-block text-center" key={i}>
            {answer[i].Answer}
            <div className="ml-[45vw]">{">" }{answer[i].user}</div>

          </div>
        </div>
      </div>
    );
  } 
     

  return (
    <div>
      <MainBody></MainBody>
      <div className="border-2   border-slate-800	 mt-[2vw] ml-[20vw] mr-[6vw]  ">
        <div className=" w-[71vw] w-5 m-5">
          <div className="grid grid-rows-3  grid-flow-col gap-2">
            <div className="row-span-3 relative border-y-4 w-[6vw] h-[12vw] m-5 font-bold">
              <div>
                {" "}
                <svg
                  className="w-6 mt-4 ml-9 mb-2 h-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleVotesInc}
                >
                  <path
                   strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                  ></path>
                </svg>
              </div>
              <div className="mb-2 ml-7">Votes</div>{" "}
              <div>
                {" "}
                <svg
                  className="w-6 mb-5 ml-9 h-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleVotesDec}

                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  ></path>
                </svg>
              </div>
              <div  className="ml-8">{votes}</div>
            </div>
            <div className="col-span-9 h-10  m-5 flex justify-left">
              <h1 className="font-bold  flex justify-left">{state.title}</h1>
            </div>
            <div className="-mt-5 flex justify-left  overflow-auto">
              <h1>{state.Question} </h1>
            </div>{" "}
            <div className="ml-[45vw]">
              <h1>{">" } {state.user}</h1>
            </div>{" "}
          </div>
          <h1 className="font-bold ml-5">Comments </h1>

          <div className="divide-y divide-slate-200 ml-40 mr-5 ">
            <div className="mt-5">This is my comment - yassine</div>
            <div className="mt-5">This is my second comment - yassine</div>
            <br></br>
          </div>
          <h1 className="font-bold mt-5  ml-5">Answers </h1>          

          <div className="divide-y divide-slate-500"> {answers}</div>
          <div className="mb-6 mx-10 ">
          <form  onSubmit={handleSubmit}>

            <label className="block text-sm mt-3 font-bold text-gray-900 dark:text-gray-300">
              Answer The question{" "}

              <textarea onChange={e=>SetanswerText(e.target.value)
                } className="block h-[12vw]	mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
              <button  className="bg-slate-500 mb-[10vw] w-[8vw] hover:bg-slate-400 text-white font-bold py-2 px-2 border border-slate-700  ml-[58vw] mt-[1vw] rounded-md">
                Post Answer
              </button>{" "}
            </label>
            </form>
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
