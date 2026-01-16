import React from "react";

const Top = (props2) => {
  console.log(props2.topinfo.info);
  return (
    <div className="flex flex-col gap-8  w-full">
      <div className="flex h-30 w-full rounded-2xl  bg-cover bg-center  p-2  justify-end "
      style={
        {backgroundImage:`url(${props2.topinfo.info.coverImage})`}
      }
      >
        <i className="ri-add-line bg-blue-50 w-fit px-2 py-1 h-fit rounded-full"></i>
      </div>

      <div
        className="absolute
          h-20 w-20
       rounded-full
       mt-16 ml-22
       z-2    
       border-2 border-transparent "
        style={{
          background:
            "conic-gradient(red,blue,green,blue,orange,pink) border-box",
        }}
      >
        <img
          className="w-full h-full object-cover object-center  rounded-full "
          src={props2.topinfo.info.image}
          alt=""
        />
      </div>

      <div className="flex flex-col  text-center justify-center p-1 gap-2">
        <h2 className="text-2xl font-semibold">
          {props2.topinfo.info.username}
        </h2>
        <p className="text-[12px] text-[#787878] leading-5 ">
          {props2.topinfo.info.description}
        </p>
      </div>
    </div>
  );
};

export default Top;
