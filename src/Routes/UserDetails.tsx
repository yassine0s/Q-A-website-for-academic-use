import React from "react";
import MainBody from "../component/MainBody";

const UserDetails = () => {
  return (
    <div>
      {" "}
      <MainBody></MainBody>
      <div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 ">
            {" "}
            <div className="border-4 fixed h-[39vw] w-[26vw] ml-5 m-4">
              <div className=" flex justify-center mt-20">
                <div
                  className="border flex justify-center  "
                  style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
                >Pictour</div>
                {/* <img src={pict}></img> */}
              </div>
              <div className=" flex  justify-center mt-[8vw]">
                description and shit
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-2 ...">
            <div className="border-4  absolute m-4 w-[55vw] h-[39vw] ">
            <form>
  <label className="block m-5">
    <span className="block text-sm font-medium text-slate-700 mb-2">Username</span>
    <input type="text" value="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-50
    "/>
  </label>
  <label className="block m-5">
    <span className="block text-sm font-medium text-slate-700 mb-2">Email</span>
    <input type="text" value="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-50
    "/>
  </label>
  <label className="block m-5">
    <span className="block text-sm font-medium text-slate-700 mb-2">age</span>
    <input type="text" value="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-50
    "/>
  </label>
  <label className="block m-5">
    <span className="block text-sm font-medium text-slate-700">badge</span>
    <br></br>
    <div>
        ssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    </div>
    
  </label>
  <label className="block m-5">
    <span className="block text-sm font-medium text-slate-700 mb-2">idk man</span>
    <input type="text" value="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-50
    "/>
  </label>
  
  <button className="border-2 w-20 bg-slate-200 p-1 hover:bg-slate-500 rounded-md mt-10 ml-[45vw]"> save </button>
</form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
