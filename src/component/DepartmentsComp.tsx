import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DepartmentsComp = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (
    name: string,
    id: string,
    description: string
  ) => {
    let path = `DepartmentDetails/${id}`;
    navigate(path, {
      state: { Name: name, departmentID: id, departmentDesc: description },
    });
  };
  const [department, setdepartment] = useState([
    { departmentName: "Department", departmentID: "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID: "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
    { departmentName: "Department", departmentID:  "1", departmentDesc: "something" },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/department")
      .then((response) => {
        console.log(response.data);
        const departmentData = response.data.data.map(
          ({ name, _id, description }: any) => {
            return {
              departmentName: name,
              departmentID: _id,
              departmentDesc: description,
            };
          }
        );
        // setdepartment(departmentData);
        setdepartment((prev) => [...prev, ...departmentData]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="ml-[52vw] mt-[1vw] text-xl font-bold">Departments</h1>

      <div className="border-2 h-[34vw]  border-slate-200	 mt-[2vw] ml-[17vw] mr-[3vw]  overflow-auto	">
        <div className="">
          <div className="h-[30vw] items-center justify-left">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
              {department.map((department, index) => (
                <div
                key={index}
                  className="bg-slate-200 text-slate-700 Ellipsis font-bold text-center p-7 rounded-lg hover:bg-slate-400"
                  onClick={() =>
                    handleDepartmentClick(
                      department.departmentName,
                      department.departmentID,
                      department.departmentDesc
                    )
                  }
                >
                  {department.departmentName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8  ml-[18vw] font-thin text-sm">
        <span
          dangerouslySetInnerHTML={{ __html: "&copy; This is Yassine's work" }}
        />
      </footer>
    </div>
  );
};

export default DepartmentsComp;
