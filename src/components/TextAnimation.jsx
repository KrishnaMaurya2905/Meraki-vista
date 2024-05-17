import React from "react";
import gsap from "gsap"
const TextAnimation = ({ customclassName, text }) => {

    const handleMouseEnter = ()=>{
        gsap.to(`.${customclassName}`,{
            y:"-100%",
            duration:.4
        })
    }
    const handleMouseLeave = ()=>{
        gsap.to(`.${customclassName}`,{
            y:"0",
            duration:.4
        })
    }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[5rem]  overflow-hidden"
    >
      <h1 className={`${customclassName}`}>{text}</h1>
      <h1 className={`${customclassName}`}>{text}</h1>
    </div>
  );
};

export default TextAnimation;
