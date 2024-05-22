import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-black text-red-600 pl-6 pb-6">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="  btn bg-black text-red-600 border-red-800 drawer-button hover:bg-red-900 hover:text-black hover:border-black"
        >
          View Categories
        </label>
      </div>
      <div className="drawer-side pt-[80px] ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-red-950 text-xl text-red-300 font-bold rounded-md ">
          <h1 className="text-white text-2xl pt-12 pb-3">Categories</h1>

          <li>
            <Link to="/samsung">Samsung</Link>
          </li>
          <li>
            <Link to="/iphone">Iphone</Link>
          </li>
          <li>
            <a>Motorola</a>
          </li>
          <li>
            <a>Tecno</a>
          </li>
          <li>
            <a>Infinix</a>
          </li>
          <li>
            <a>Google</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
