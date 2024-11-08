import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center justify-between px-12 py-4 bg-white shadow-md">
      <div className="flex items-center text-1xl sm:text-3xl font-bold uppercase text-black space-x-1">
        <p className="text-black">Paws</p>
        <p className="text-orange-500 px-1">&</p>
        <p className="text-black">Whiskers</p>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.to} className="text-black">
              <NavLink
                to={link.to}
                aria-label={link.label}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500 font-semibold uppercase"
                    : "text-gray-500 hover:border-b-2 hover:border-orange-400 font-semibold uppercase transition duration-200 ease-in-out"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden flex items-center space-x-4">
        <button
          className="text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-3xl">
            <Icon icon="mingcute:menu-fill" />
          </span>
        </button>

        <button className="bg-black text-white rounded-full px-1 py-1 hover:bg-gray-800 transition">
          <span className="text-lg">
            <NavLink to={"/login"} aria-label="Login">
              <Icon icon="solar:user-bold" />
            </NavLink>
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg w-full lg:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  aria-label={link.label}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 font-semibold uppercase"
                      : "text-gray-500 hover:border-b-2 hover:border-orange-400 font-semibold uppercase transition duration-200 ease-in-out"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden lg:block bg-white p-2">
        <button className="bg-black text-white px-6 py-3 rounded-md transition">
          <NavLink to={"/login"} aria-label="Login" className="relative font-semibold uppercase hover:border-b-2 hover:border-orange-400">
            Login
          </NavLink>
        </button>
      </div>
    </div>
  );
}
