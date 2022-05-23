import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainBody from "../../component/MainBody";

const Subjects = () => {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
    { SubjectName: "subject ", SubjectID: 1 },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/subject/get_all/626190161c79e841f4fa0640")
      .then((response) => {
        console.log(response.data);
        const subjectData = response.data.data.map(({ name, _id }: any) => {
          return {
            SubjectName: name,
            SubjectID: _id,
          };
        });
        // setSubjects(subjectData);
        setSubjects((prev) => [...prev, ...subjectData]);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubjectClick = (name: String, id: number) => {
    let path = `SubjectDetails/${id}`;
    navigate(path, { state: { Name: name, TeacherID: id } });
  };
  return (
    <div>
      <MainBody></MainBody>
      <h1 className="ml-[52vw] mt-[1vw] font-bold">Subjects</h1>
      <div className="border-2 h-[30vw]  border-slate-800	 mt-[2vw] ml-[17vw] mr-[3vw] overflow-auto ">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 ml-[1vw] mt-5 font-thin text-sm">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="border select-none  rounded-md hover:bg-slate-200"
              onClick={() =>
                handleSubjectClick(subject.SubjectName, subject.SubjectID)
              }
            >
              {subject.SubjectName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
