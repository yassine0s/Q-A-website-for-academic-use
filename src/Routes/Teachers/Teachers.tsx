import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainBody from "../../component/MainBody";

const Teachers = () => {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState([
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},
    { TeacherName: "teacher ", TeacherID: 1 ,TeacherBio: "hello", TeacherEmail : "ssthg@sthg",TeacherPict : "picture"},



  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/teacher")
      .then((response) => {
        console.log(response.data);
        const TeacherData = response.data.data.map(({ name,last_name, _id ,bio,email,Picture}: any) => {
console.log(Picture)
          return {
            TeacherName: name.concat(" " +last_name),
            TeacherID: _id,
            TeacherBio: bio,
            TeacherEmail : email,
            TeacherPict: Picture,
          };
        });
        // setTeacher(TeacherData);
        setTeacher((prev) => [...prev, ...TeacherData]);

      })
      .catch((error) => console.log(error));
  }, []);

  const handleTeacherClick = (id: number,name:string, bio:string, email: string,Picture: string) => {
    let path = `TeacherDetails/${id}`;
    navigate(path, { state: { TeacherID: id,TeacherName: name , TeacherEmail : email,TeacherBio : bio ,TeacherPict :Picture} });
  };
  return (
    <div>
      <MainBody></MainBody>
      <h1 className="ml-[52vw] mt-[1vw] font-bold">Teachers</h1>

      <div className="border-2 h-[30vw]  border-slate-800	 mt-[2vw] ml-[17vw] mr-[3vw]  overflow-auto">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 ml-[1vw] mt-5 font-thin text-sm">
          {teacher.map((teacher, index) => (
            <div
            key={index}
              className="border select-none  rounded-md hover:bg-slate-200"
              onClick={() => handleTeacherClick(teacher.TeacherID,teacher.TeacherName, teacher.TeacherBio,teacher.TeacherEmail,teacher.TeacherPict)}
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
