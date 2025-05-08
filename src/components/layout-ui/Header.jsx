import React, { useState } from "react";

const Header = () => {
  const [navlist] = useState([
    { id: 1, name: "About" },
    { id: 2, name: "Work" },
    { id: 3, name: "Contact" },
  ]);
  return (
    <header className="flex justify-between px-12 py-6">
      <div className="brand font-semibold text-lg">Logo</div>
      <nav>
        <ul className="flex gap-12">
          {navlist.map(({ id, name }) => (
            <NavItem key={id} name={name} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const NavItem = ({ name }) => {
  return <li className="cursor-pointer hover:underline">{name}</li>;
};
