import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import StaggerText from "./StaggerText";
import { PiInstagramLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import Button from "./Button";
const Navbar = () => {
  const [openNav, setOpennav] = useState(false);
  return (
    <div className="relative z-[99] bg-Dominant">
      <PageTransition openNav={openNav} setOpennav={setOpennav} />
      <Nav openNav={openNav} setOpennav={setOpennav} />
    </div>
  );
};

export default Navbar;

const PageTransition = ({ openNav, setOpennav }) => {
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

  const [image, setImage] = useState(null);

  const handleMouseEnter = useCallback((image) => {
    setImage(image);
  }, []);

  return (
    <>
      <DesktopNav
        openNav={openNav}
        setOpennav={setOpennav}
        image={image}
        routesdata={routesdata}
        handleMouseEnter={handleMouseEnter}
      />
      <MobileNav
        openNav={openNav}
        setOpennav={setOpennav}
        routesdata={routesdata}
      />
    </>
  );
};

const Nav = ({ openNav, setOpennav }) => {
  return (
    <div className="w-full fixed z-[99] text-Secondary h-[10vh] flex justify-between items-center lg:px-20 px-10">
      <div className="flex gap-2 items-center">
        <img
          className="max-sm:h-[10rem] sm:h-[12rem]"
          src="public\images\image__1___1_-removebg-preview.png"
          alt=""
        />
      </div>
      <div
        onClick={() => {
          setOpennav((prev) => !prev);
        }}
      >
        {openNav ? (
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

const MobileNav = ({ openNav, setOpennav, routesdata }) => {
  return (
    <div
      className={`fixed md:hidden w-full overflow-hidden text-Secondary bg-black flex flex-col gap-[6rem] justify-center px-20 max-[500px]:px-14 text-[3rem] max-[350px]:px-10 ${
        openNav ? "h-screen" : "h-0"
      }`}
    >
      <div className="Navlinks flex flex-col">
        {routesdata.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? "text-Highliter " : "")}
            onClick={() => {
              setOpennav((prev) => !prev);
            }}
            onMouseEnter={() => handleMouseEnter(item.image)}
            to={`${item.route}`}
          >
            {item.title}
            {/* <svg
            width="100%"
            height="10"
            className="pencil-stroke-svg "
            viewBox="0 0 255 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pencil-stroke"
                patternUnits="userSpaceOnUse"
                width="100%"
                height="100%"
              >
                <image href="https://twogood.com.au/header-animation.svg" />
              </pattern>
            </defs>
            <path
              className="go313494634"
              d="M1 8.07463C6 9.07463 12 11.0746 24 10.5746C55.5341 9.26072 88 3.26641 117.5 4.07463C154 5.07463 172.5 4.07463 184.5 4.07463C207 4.07463 230 7.07463 254 11.5746"
              fill="none"
              stroke="url(#pencil-stroke)"
              strokeWidth="10"
              style={{ strokeDashoffset: "255px" }}
            />
          </svg> */}
          </NavLink>
        ))}
        {/* <Button/> */}
      </div>
      <SocialLinksandMore />
    </div>
  );
};

const DesktopNav = ({ openNav, setOpennav, routesdata, image , handleMouseEnter}) => {
  return (
    <div
      className={`fixed ${
        openNav ? "h-screen p-10" : "h-0"
      } w-full overflow-hidden flex transition-all max-md:hidden duration-700 bg-black`}
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
                setOpennav((prev) => !prev);
              }}
              onMouseEnter={() => handleMouseEnter(item.image)}
              to={`${item.route}`}
            >
              <StaggerText
                text={item.title}
                customclassName={item.customclassName}
              />
            </NavLink>
          ))}
          {/* <Button/> */}
        </div>
        <SocialLinksandMore />
      </div>
    </div>
  );
};
