import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import axios from "axios";

const SubjDropdown: React.FC<any> = ({ childToParent }) => {
  // dropdown props
  const [subjects, setSubjects] = useState([
    { SubjectName: "subject ", SubjectID: "1" },
    { SubjectName: "subject ", SubjectID: "1" },
    { SubjectName: "subject ", SubjectID: "1" },
    { SubjectName: "subject ", SubjectID: "1" },
  ]);
  const [sname, setsname] = useState('Subjects')

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef: any = React.createRef();
  const popoverDropdownRef: any = React.createRef();
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
        setSubjects(subjectData);
        // setSubjects((prev) => [...prev, ...subjectData]);
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

  bgColor = "bg-slate-700";
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
              {sname}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white " +
                " " +
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
                {subjects.map((subject, index) => (
                  <div
                    className="m-2 border-b-4 hover:text-blue-700"
                    onClick={() =>{ childToParent(subject.SubjectID);
                        setsname(subject.SubjectName);}}
                    key={index}
                  >
                    {subject.SubjectName}
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjDropdown;
