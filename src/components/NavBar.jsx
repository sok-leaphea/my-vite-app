import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-12 py-4">
      <div className="text-black text-3xl font-bold">PETWORLD</div>
      <div className="hidden md:flex">
        <ul className="flex space-x-8">
          <li className="text-black">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="bg-white p-2">
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
          Login
        </button>
      </div>
    </div>
  );
}
