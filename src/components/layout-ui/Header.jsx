import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuSvg from "../../assets/images/menu.svg";

const Header = () => {
  const [navlist] = useState([
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Work", link: "/#work" },
    { id: 3, name: "Contact", link: "#contact" },
  ]);
  const [show, setShow] = useState(false);
  // xs, sm, md, lg

  const showToggler = () => {
    setShow(!show);
  };

  const navlistClassName = show
    ? `!flex flex-col justify-center items-center text-xl bg-amber-50 fixed left-0 top-0 w-full h-full
        md:flex-row md:relative md:bg-transparent
    `
    : "hidden";

  return (
    <header className="flex justify-between px-12 py-6 sticky top-0 bg-white">
      <div className="brand font-semibold text-lg">Logo</div>
      <nav>
        <ul className={`${navlistClassName} hidden md:flex gap-12 `}>
          {navlist.map(({ id, name, link }) => (
            <NavItem key={id} name={name} link={link} />
          ))}
          <p
            onClick={showToggler}
            className="md:hidden cursor-pointer hover:underline font-medium bg-slate-900 py-2 px-3 text-white"
          >
            Go Back
          </p>
        </ul>
      </nav>
      <img
        onClick={showToggler}
        src={MenuSvg}
        className="h-6 w-6 md:hidden"
        alt="Menu"
      />
    </header>
  );
};

export default Header;

const NavItem = ({ name, link }) => {
  return (
    <li className="cursor-pointer hover:underline  ">
      <Link to={link}>{name}</Link>
    </li>
  );
};
