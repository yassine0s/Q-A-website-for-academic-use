import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import axios from "axios";



const DepartmDropdown: React.FC<any>  = ({ childToParent }) => {
  // dropdown props


  const [dname, setdname] = useState('Departments')

  const [department, setdepartment] = useState([
    {
      departmentName: "Department",
      departmentID: "1",
      departmentDesc: "something",
    },
    {
      departmentName: "Department",
      departmentID: "1",
      departmentDesc: "something",
    },
  ]);
  


  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef: any = React.createRef();
  const popoverDropdownRef: any = React.createRef();
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
         setdepartment(departmentData);
        // setdepartment((prev) => [...prev, ...departmentData]);
      })
      .catch((error) => console.log(error));
  }, []);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
 
    bgColor = "bg-slate-700"
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
                            {dname}

            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white "  + " " +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <div
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                " text-slate-700" 
                }
                onClick={(e) => e.preventDefault()}
              >
                {department.map((department, index) => (
                  <div className="m-2 border-b-4 hover:text-blue-700"  onClick={() =>{ childToParent(department.departmentID); setdname(department.departmentName);}} key={index}>{department.departmentName}</div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmDropdown ;
 

