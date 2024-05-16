import React from "react";
import gsap from "gsap";
import { SplitText } from "gsap-trial/SplitText";
const TextAnimation = ({ text, customclassName }) => {
  gsap.registerPlugin(SplitText);

  const splitedText = new SplitText(`.${customclassName}`, { types: "chars" });
  const { chars } = splitedText;
  const handleMouseEnter = () => {
    gsap.to(chars, {
      y: "-100%",
      stagger: 0.03,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(chars, {
      y: "0%",
      stagger: 0.03,
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[8vh] bg-red-500 overflow-hidden w-full"
    >
      <h1 className={`${customclassName}`}>{text}</h1>
      <h1 className={`${customclassName}`}>{text}</h1>
    </div>
  );
};

export default TextAnimation;
