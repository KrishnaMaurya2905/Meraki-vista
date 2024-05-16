import React from "react";
import gsap from "gsap";
const StaggerText = ({ text, customclassName }) => {
  const AnimateSplitTextUp = () => {
    gsap.from(`.${customclassName}`, {
      y: "100%",
      ease: "back.out(1.7)",
    });
  };
  return (
    <div
      onMouseEnter={AnimateSplitTextUp}
      className="h-[5vh] sm:h-[9vh] overflow-hidden "
    >
      <h1 className={`${customclassName} `}>
        {text}
      </h1>
    </div>
  );
};

export default StaggerText;
