import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Question = () => {
  const [question, setQuestion] = useState([
    {
      Question:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis, maiores tempora recusandae, delectus repudiandae atque illo excepturi soluta ab aliquid deserunt voluptatem, praesentium autem assumenda odit quisquam veritatis minus.",
      QuestionID: "1",
      solved: false,
      user: "yassine",
      departementID: "1",
      SubjectID: "1",
      votes: 100,
      title: 'Question1',
    },
  ]);
  const navigate = useNavigate();

  const handleQuestionClick = (
    Question: string,
    QuestionID: string,
    solved: boolean,
    user: string,
    departementID: string,
    SubjectID: string,
    votes: number,
    title: string,
  ) => {
    let path = `/Answer/${QuestionID}`;
    navigate(path, {
      state: {
        Question: Question,
        QuestionID: QuestionID,
        solved: solved,
        user: user,
        departementID: departementID,
        SubjectID: SubjectID,
        votes: votes,
        title:title,
      },
    });
  };

  let questions = [];
  for (let i = 0; i < question.length; i++) {
    questions.push(
      <div key={i}>
        <div className="py-12 text-sm grid grid-cols-6 ">
          <div className="row-span-1  relative  w-[7vw] h-[6vw] ml-8 justify-center flex">
            <div className="grid-row-2">
              <div className=" flex justify-center font-bold">
                <div className="col-span-4">{question[i].votes}</div>
              </div>
              <div className="mt-8 ">Votes</div>
            </div>
          </div>
          <div
            key={i}
            className="col-span-4 inline-block text-center hover:text-slate-500"
            onClick={() =>
              handleQuestionClick(
                question[i].Question,
                question[i].QuestionID,
                question[i].solved,
                question[i].user,
                question[i].departementID,
                question[i].SubjectID,
                question[i].votes,
                question[i].title,
              )
            }
          >
            {question[i].Question}
          </div>
        </div>
      </div>
    );
  }

  const QuestRenderer = () => {
    axios
      .get("http://localhost:8080/api/question")
      .then((response) => {
        console.log(response.data);
        const QuestionData = response.data.data.map(
          ({
            user,
            _id,
            content,
            department_id,
            subject_id,
            solved,
            votes,
            title,
          }: any) => {
            return {
              Question: content,
              QuestionID: _id,
              solved: solved,
              user: user,
              departementID: department_id,
              SubjectID: subject_id,
              votes: votes,
              title:title,
            };
          }
        );
        // setQuestion(QuestionData);
        setQuestion((prev) => [...prev, ...QuestionData]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    QuestRenderer();
  }, []);
  return <div>{questions}</div>;
};

export default Question;
