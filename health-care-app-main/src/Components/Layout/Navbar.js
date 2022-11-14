import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import {AiOutlineHome} from 'react-icons/ai';
import {MdDateRange} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import {ImLab} from 'react-icons/im';
import {VscAccount} from 'react-icons/vsc';

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log("pathname", location.pathname);
  return (
    <section className="navbar">
      <Link to="/" className={`${pathname === "/" && "active-nav-icon"}`}>
        <AiOutlineHome />
      </Link>
      <Link
        to="/appointments"
        className={`${pathname === "/appointments" && "active-nav-icon"}`}
      >
        <MdDateRange />
      </Link>
      <Link
        to="/chat"
        className={`${pathname === "/chat" && "active-nav-icon"}`}
      >
        <AiOutlineMessage />
      </Link>
      <Link
        to="/labs"
        className={`${pathname === "/labs" && "active-nav-icon"}`}
      >
        <ImLab />
      </Link>
      <Link
        to="/my-account"
        className={`${pathname === "/my-account" && "active-nav-icon"}`}
      >
        <VscAccount />
      </Link>
    </section>
  );
};

export default Navbar;
