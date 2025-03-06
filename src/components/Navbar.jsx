import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const navList = [
  { title: 'Search', path: '/search' },
  { title: 'Sort', path: '/sort' },
  { title: 'Tree', path: '/tree' },
  { title: 'Graph', path: '/graph' },
  { title: 'DP', path: '/dp' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">Kuldeep</Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-4">
        {navList.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.path}
            className={({ isActive }) => `btn btn-ghost ${isActive ? 'text-primary' : ''}`}
          >
            {nav.title}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>

        {isOpen && (
          <div className="absolute right-4 top-14 bg-base-200 rounded-lg shadow-md p-4 flex flex-col gap-2 w-48 z-99">
            {navList.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.path}
                className={({ isActive }) => `btn btn-ghost w-full text-left ${isActive ? 'text-primary' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {nav.title}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
