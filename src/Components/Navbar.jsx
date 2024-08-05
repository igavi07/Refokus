import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navData = [
    { name: "Home", route: "/" },
    { name: "Work", route: "/work" },
    { name: "About", route: "/about" },
    { name: "News", route: "/news" },
    { name: "Careers", route: "/careers" },
  ];

  return (
    <div className="w-full mx-auto py-7 px-10 fixed justify-between flex">
      <div className="gap-[7vw] flex items-center">
      <img
        className="h-5"
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="nav-links flex gap-12 text-sm">
        {navData.map((elem, index) => (
          <NavLink to={elem.route} key={index} className={`flex items-center gap-2`}>
            {(e) => {
                return <>
                 {e.isActive && <span className="inline-block py-auto rounded-full  h-[5px] w-[5px] bg-green-500"></span>}
                 <span> {elem.name}</span> 
                </>
            }}
          </NavLink>
        ))}
      </div>
      </div>

      <Button title={"Start a Project"} />
    </div>
  );
};

export default Navbar;
