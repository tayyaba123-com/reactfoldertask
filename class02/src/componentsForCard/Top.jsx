import React from "react";

const Top = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex h-30 w-full rounded-2xl bg-[url('/cloud.png')] bg-cover bg-center  p-2  justify-end ">
        <i class="ri-add-line bg-blue-50 w-fit px-2 py-1 h-fit rounded-full"></i>
      </div>

      <div
        className="absolute
       h-20 w-20
       rounded-full
       top-20 left-26
       z-2    
       border-2 border-transparent "  
       style={
        {
            background:"conic-gradient(red,blue,green,blue,orange,pink) border-box"
        }
       }
      >
      <img  className="w-full h-full bg-cover bg-cener  rounded-full " src="/cloud.png" alt="" />
      </div> 

      <div className="flex flex-col  text-center justify-center p-1 gap-2">
        <h2 className="text-3xl font-semibold">Tayyaba</h2>
        <p className="text-sm text-[#787878] leading-5 ">Lorem ipsum dolor sitrum praesentium reiciendis alias!</p>
      </div>
    </div>
  );
};

export default Top;
