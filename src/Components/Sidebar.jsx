import React from "react";

function Sidebar() {
  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-black text-red-600">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn bg-black text-red-600 border-red-500 drawer-button hover:bg-red-900 hover:text-black"
        >
          View Categories
        </label>
      </div>
      <div className="drawer-side pt-[128px]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-black text-red-600 text-base-content ">
          <h1 className="text-white text-2xl pt-12 pb-3">Categories</h1>

          <li>
            <a>Samsung</a>
          </li>
          <li>
            <a>Iphone</a>
          </li>
          <li>
            <a>Matrola</a>
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
