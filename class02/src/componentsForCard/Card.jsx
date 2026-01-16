import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";

const Card = (props1) => {
  console.log(props1)
  return (
    <div
      className="  items-center flex flex-col w-70 rounded-2xl bg-[#FDFDFD]
     border-[#FDFDFD] border p-2 gap-3 
     shadow-lg shadow-blue-[#ffff]
     "
    >
      <Top topinfo={props1}/>

      <Bottom bottominfo={props1}/>
    </div>
  );
};

export default Card;
