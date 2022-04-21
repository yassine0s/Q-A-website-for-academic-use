import React from 'react';
import MainBody from '../../component/MainBody';

const DepartmentDetails = () => {
  
    return (
        <div>
          <MainBody></MainBody>
          <div className="border-2 h-[40vw]  border-slate-800	 mt-[2vw] ml-[17vw] mr-[3vw] overflow-auto ">
            <div className="m-5">
              <h1 className="font-bold text-xl">Department Name</h1>
              <br></br>
              <div className="ml-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
                reiciendis saepe similique dolore id sed facilis dolor temporibus,
                officia libero. Tenetur, ipsam omnis hic quisquam minima mollitia
                molestiae possimus culpa. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ut quae, exercitationem veniam eligendi maxime qui
                eos in quis doloribus eum quo iusto dolores ex dolore eius alias
                corrupti harum accusamus?
              </div>
              <br></br>
              <h1 className="font-bold text-xl ">Department Subjects</h1>
              <br></br>
<div>
<div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
  <div className=" border m-2">01</div>
  <div className=" border m-2">01</div>
  <div className=" border m-2">01</div>
  <div className=" border m-2">01</div>
  

</div>
</div>
<br></br>
              <h1 className="font-bold text-xl ">Department Teachers</h1>
              <br></br>
              <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
  <div className=" border m-2">01</div>
  <div className=" border m-2">01</div>
  <div className=" border m-2">01</div>
  <div className=" border m-2">01</div>
  

</div>
<div>
  
</div>
            </div>
          </div>
        </div>
      );
    };

export default DepartmentDetails;