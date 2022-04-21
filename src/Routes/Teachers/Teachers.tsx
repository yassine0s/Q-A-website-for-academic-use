import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainBody from "../../component/MainBody";

const Teachers = () => {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState([
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },
    { TeacherName: "teacher ", TeacherID: 1 },

  ]);
  useEffect(() => {
    axios
      .get("url")
      .then((response) => {
        console.log(response.data);
        const tch = {
          TeacherName: response.data.Name,
          TeacherID: response.data.ID,
        };
        let getTeacher = [...teacher, tch];
        setTeacher(getTeacher);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleTeacherClick = (id: number) => {
    let path = `TeacherDetails/${id}`;
    navigate(path, { state: { TeacherID: id } });
  };
  return (
    <div>
      <MainBody></MainBody>
      <h1 className="ml-[52vw] mt-[1vw] font-bold">Teachers</h1>

      <div className="border-2 h-[30vw]  border-slate-800	 mt-[2vw] ml-[17vw] mr-[3vw]  overflow-auto">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 ml-[1vw] mt-5 font-thin text-sm">
          {teacher.map((teacher, index) => (
            <div 
            className="border select-none  rounded-md hover:bg-slate-200"
            onClick={() => handleTeacherClick(teacher.TeacherID)}
            >
              {teacher.TeacherName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
