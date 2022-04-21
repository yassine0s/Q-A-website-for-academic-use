import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DepartmentsComp = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (id: number) => {
    let path = `DepartmentDetails/${id}`;
    navigate(path, { state: { departmentID: id } });
  };
  const [department, setdepartment] = useState([
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
    { departmentName: "Departm ilfouleni ", departmentID: 1 },
  ]);
  useEffect(() => {
    axios
      .get("url")
      .then((response) => {
        console.log(response.data);
        const dep = {
          departmentName: response.data.Name,
          departmentID: response.data.ID,
        };
        let getDepartment = [...department, dep];
        setdepartment(getDepartment);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="ml-[52vw] mt-[1vw] font-bold">Departments</h1>

      <div className="border-2 h-[34vw]  border-slate-200	 mt-[2vw] ml-[17vw] mr-[3vw]  overflow-auto	">
        <body className="">
          <div className="h-[30vw] items-center justify-left">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              {department.map((department, index) => (
                <div
                  className="bg-slate-200 text-slate-700 text-lg font-bold text-center p-10 rounded-lg hover:bg-slate-400"
                  onClick={() =>
                    handleDepartmentClick(department.departmentID)
                  }
                >
                  {department.departmentName}
                </div>
              ))}
            </div>
          </div>
        </body>
      </div>

      <footer className="mt-8  ml-[18vw] font-thin text-sm">
        <span dangerouslySetInnerHTML={{ __html: "&copy; hello" }} />
      </footer>
    </div>
  );
};

export default DepartmentsComp;
