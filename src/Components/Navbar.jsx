import React from "react";
import { Link } from "react-router-dom";

function Navbar({cart}) {
  return (
    <div className="navbar bg-black text-red-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-black text-red-600 mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cart.length})</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl">MobileMart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal pl-12 px-1 gap-8 text-2xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
