import gsap from "gsap";
import React, { useRef } from "react";

const Agency = () => {
  return (
    <div className="w-full bg-Dominant">
      <Agencypage1 />
      <Agencypage2 />
      <Agencypage3 />
      <Agencypage4/>
    </div>
  );
};

export default Agency;

// page 1
const Agencypage1 = () => {
  return (
    <div className="w-full pt-[10vh] px-5 sm:px-10  tracking-tighter text-Secondary h-[90vh]">
      <div className="h-[40%] text-[11rem] font-[500] font-Decorative max-sm:h-[22%]  border-b-[1px] max-sm:text-[5rem] w-full">
        <h1>Agency.</h1>
      </div>
      <div className="h-[60%] max-lg:flex-col py-20 flex justify-between gap-5 w-full">
        <h1 className="text-[1.5rem] opacity-60 font-['Nunito']">why us ?</h1>
        <p className="text-[1.4rem] max-sm:text-[1.2rem] max-lg:w-full  w-[60%] font-['poppins'] ">
          we offer a fresh perspective in the realm of design. Our fluency in
          the nuances of today's creative and modern design trends positions us
          as pioneers of innovation. We effortlessly blend contemporary
          aesthetics with classic craftsmanship. Our approach is adventurous,
          our creations captivating, as we eagerly tackle challenges.
          Nevertheless, our hunger for knowledge remains insatiable.
        </p>
      </div>
    </div>
  );
};

// page 2
const Agencypage2 = () => {
  return <div className="w-full h-screen bg-red-400"></div>;
};

// page 3
const Agencypage3 = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  const handleMousemoveAnimation = (e) => {
    const { movementX, movementY } = e;
    const speed = 1;
    gsap.to(plane1.current, {
      duration: 0.2,
      x: `+=${movementX * speed * 0.3}`,
      y: `+=${movementY * speed * 0.5}`,
      ease: "Power2.easeOut",
    });
    gsap.to(plane2.current, {
      duration: 0.2,
      x: `+=${movementX * speed * 0.5}`,
      y: `+=${movementY * speed * 0.3}`,
      ease: "Power2.easeOut",
    });
    gsap.to(plane3.current, {
      duration: 0.2,
      x: `+=${movementX * speed * 0.2}`,
      y: `+=${movementY * speed * 0.4}`,
      ease: "Power2.easeOut",
    });
  };

  return (
    <div
      onMouseMove={(e) => {
        handleMousemoveAnimation(e);
      }}
      className="relative h-[250vh] w-full"
    >
      <div ref={plane1} className="absolute h-full w-full">
        <div className="h-[40vh] max-md:w-[45%] max-md:left-[0%] absolute w-[20%] bg-purple-500 left-[5%] top-[60%]"></div>
        <div className="h-[45vh] max-md:w-[40%] max-md:left-0 max-md:top-0 absolute w-[20%] bg-green-100 left-[5%] top-[5%]"></div>
        <div className="h-[40vh] absolute  max-md:hidden  w-[25%] bg-green-300 left-[70%] top-[55%]"></div>
        <div className="h-[50vh] absolute max-md:w-[40%] max-md:right-[10%] max-md:top-[5%] w-[20%] bg-green-600 right-[5%] top-[2%]"></div>
      </div>
      <div ref={plane2} className="absolute  h-full top-0 w-full">
        <div className="h-[45vh] max-md:w-[40%] max-md:top-[50%] max-md:left-[45%] absolute w-[20%] bg-green-500  left-[42%] top-[40%]"></div>
        <div className="h-[35vh] max-md:w-[40%]  absolute w-[20%] bg-green-100 left-[0%] top-[85%]"></div>
        <div className="h-[35vh] absolute w-[20%] max-md:w-[40%] max-md:right-[15%] max-md:top-[75%] bg-green-100 right-[10%] top-[78%]"></div>
      </div>
      <div ref={plane3} className="absolute h-full top-0 w-full">
        <div className="h-[40vh] max-md:w-[40%] max-md:top-[42%] max-md:left-[0%] absolute w-[20%] bg-red-500 left-[8%] top-[35%]"></div>
        <div className="h-[40vh] absolute w-[20%] max-md:w-[35%] max-md:top-[23%] max-md:left-[6%] bg-green-100 left-[40%] top-[15%]"></div>
        <div className="h-[40vh] absolute max-md:hidden w-[25%] bg-green-300 left-[35%] top-[82%]"></div>
        <div className="h-[40vh] absolute w-[20%] max-md:w-[40%] max-md:left-[52%] bg-green-600 right-[5%] top-[30%]"></div>
      </div>
    </div>
  );
};


const Agencypage4 = ()=>{
  return (
    <div className="w-full h-screen"></div>
  )
}