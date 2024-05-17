import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TextAnimation from "./TextAnimation";
import { PiInstagramLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
const Navbar = () => {
  const [isnavopen, setisnavopen] = useState(false);
  const routesdata = [
    {
      title: "HOME",
      image: "",
      customclassName: "home",
      route: "/",
    },
    {
      title: "PROJECTS",
      image:
        "https://images.unsplash.com/photo-1715351191012-c67dd96e3483?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customclassName: "projects",
      route: "/projects",
    },
    {
      title: "AGENCY",
      image:
        "https://images.unsplash.com/photo-1715353500110-d940cc09c007?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customclassName: "agency",
      route: "/agency",
    },
    {
      title: "EXPERTIES",
      image:
        "https://images.unsplash.com/photo-1715624849529-3f99fafffee5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customclassName: "experties",
      route: "/experties",
    },
    {
      title: "CONTACT",
      image:
        "https://images.unsplash.com/photo-1715647252838-a92275b3234d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customclassName: "contact",
      route: "/contact",
    },
  ];

  return (
    <>
      <Nav isnavopen={isnavopen} setisnavopen={setisnavopen} />
      <div>
      <DesktopNav
        routesdata={routesdata}
        isnavopen={isnavopen}
        setisnavopen={setisnavopen}
      />
      <MobileNav routesdata={routesdata}
        isnavopen={isnavopen}
        setisnavopen={setisnavopen} />
      </div>
    </>
  );
};

export default Navbar;

const Nav = ({ isnavopen, setisnavopen }) => {
  return (
    <div className=" w-full fixed top-0 z-[100] text-Secondary h-[10vh] flex justify-between items-center px-10">
      <h1 className="text-[2rem]">M/V.</h1>
      <div
        onClick={() => {
          setisnavopen((prev) => !prev);
        }}
      >
        {isnavopen ? (
          <svg
            className="menu-opener__square transition-all lg:h-[25px] lg:w-[25px] duration-1000"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="#fff"
            stroke="#FFF"
            strokeWidth="1"
          >
            <rect y="10" width="2" height="2" fill="currentColor"></rect>
            <rect width="2" height="2" fill="currentColor"></rect>
            <rect x="5" y="5" width="2" height="2" fill="currentColor"></rect>
            <rect x="10" y="10" width="2" height="2" fill="currentColor"></rect>
            <rect x="10" width="2" height="2" fill="currentColor"></rect>
          </svg>
        ) : (
          <svg
            className="menu-opener__square transition-all duration-1000 lg:h-[25px] lg:w-[25px]"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#FFF"
            strokeWidth="1"
          >
            <rect y="10" width="2" height="2" fill="currentColor"></rect>
            <rect y="5" width="2" height="2" fill="currentColor"></rect>
            <rect width="2" height="2" fill="currentColor"></rect>
            <rect x="5" y="10" width="2" height="2" fill="currentColor"></rect>
            <rect x="5" y="5" width="2" height="2" fill="currentColor"></rect>
            <rect x="5" width="2" height="2" fill="currentColor"></rect>
            <rect x="10" y="10" width="2" height="2" fill="currentColor"></rect>
            <rect x="10" y="5" width="2" height="2" fill="currentColor"></rect>
            <rect x="10" width="2" height="2" fill="currentColor"></rect>
          </svg>
        )}
      </div>
    </div>
  );
};
const DesktopNav = ({
  isnavopen,
  setisnavopen,
  routesdata,
  image,
  handleMouseEnter,
}) => {
  return (
    <div
      className={`fixed ${
        isnavopen ? "h-screen p-10" : "h-0"
      } w-full max-sm:hidden overflow-hidden flex transition-all max-md:hidden duration-700 bg-black`}
    >
      <div className="h-full w-[55%] p-20 sm:px-2">
        <img
          className="w-full transition-all duration-1000 h-full object-cover"
          src={`${
            image
              ? image
              : "https://images.unsplash.com/photo-1715622053361-4baf5ad2c51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }`}
          alt=""
        />
      </div>
      <div className="h-full w-[45%] text-Secondary font-Decorative flex flex-col items-center justify-center">
        <div className="h-[60%] flex flex-col gap-1 sm:text-[3.8rem]">
          {routesdata.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) => (isActive ? "text-Highliter " : "")}
              onClick={() => {
                setisnavopen((prev) => !prev);
              }}
              onMouseEnter={() => handleMouseEnter(item.image)}
              to={`${item.route}`}
            >
              <TextAnimation
                customclassName={item.customclassName}
                text={item.title}
              />
            </NavLink>
          ))}
        </div>
        <SocialLinksandMore />
      </div>
    </div>
  );
};
const MobileNav = ({ isnavopen, setisnavopen, routesdata }) => {
  return (
    <div
      className={`fixed md:hidden ${isnavopen ? "h-screen" : "h-0"} transition-all duration-1000 w-full overflow-hidden text-Secondary bg-black flex flex-col gap-[6rem] justify-center px-20 max-[500px]:px-14 text-[3rem] max-[350px]:px-10 `}
    >
      <div className="Navlinks flex flex-col">
        {routesdata.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? "text-Highliter " : "")}
            onClick={() => {
              setisnavopen((prev) => !prev);
            }}
            onMouseEnter={() => handleMouseEnter(item.image)}
            to={`${item.route}`}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <SocialLinksandMore />
    </div>
  );
};
const SocialLinksandMore = () => {
  return (
    <div className="h-[10vh] flex flex-col items-start justify-start max-sm:w-full mr-[7rem]">
      <div className="flex items-center text-[2.5vh] gap-5">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <PiInstagramLogo className="hover:text-Highliter" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <RiTwitterXFill className="hover:text-Highliter" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-Highliter" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaDribbble className="hover:text-Highliter" />
        </a>
      </div>
      <h3 className="text-[1.8vh] hover:text-Highliter mt-4 font-Decorative">
        Privacy & Cookies
      </h3>
    </div>
  );
};
