import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/addJob">Add a Job</NavLink>
      </li>
      <li>
        <NavLink to="/myAddedJobs">My Added Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/my-accepted-tasks">My Accepted Tasks</NavLink>
      </li>
    </>
  );
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    console.log("log out");
    // func call
    signOutUser()
      .then(() => {
        alert("User logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">Task Bridge</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex justify-between gap-2 items-center">{links}</div>
      </div>

      <div className="navbar-end gap-3">
        {/* theme change*/}
        <input
          onChange={(e) => handleChangeTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={localStorage.getItem("theme")}
          className="toggle"
        />
        {user ? (
          <div className="flex justify-between items-center gap-2">
            <div className="w-9 relative group cursor-pointer">
              <img
                alt="Tailwind CSS Navbar component"
                referrerPolicy="no-referrer"
                src={
                  user.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                className="rounded-full w-full h-full object-cover "
              />
              <div
                className="
        absolute left-1/2 -bottom-8
        -translate-x-1/2
        bg-black text-white text-xs px-2 py-1 rounded-md
        opacity-0 group-hover:opacity-100
        transition-all duration-200
        whitespace-nowrap
        pointer-events-none
      "
              >
                {user.displayName || "User Name"}
              </div>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
            >
              <IoLogOut /> Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to={"/auth/login"}
              className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
            >
              {" "}
              <IoLogIn /> Login
            </Link>
            <Link
              to={"/auth/register"}
              className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
            >
              {" "}
              <IoLogIn /> Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// <div className="dropdown dropdown-end z-50">
//   <div
//     tabIndex={0}
//     role="button"
//     className="btn btn-ghost btn-circle avatar"
//   >
//     <div className="w-9 border-2 border-gray-300 rounded-full">
//       <img
//         alt="Tailwind CSS Navbar component"
//         referrerPolicy="no-referrer"
//         src={
//           user.photoURL ||
//           "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//         }
//       />
//     </div>
//   </div>
//   <ul
//     tabIndex="-1"
//     className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
//   >
//     <div className=" pb-3 border-b border-b-gray-200">
//       <li className="text-sm font-bold">{user.displayName}</li>
//     </div>

//     <li>
//       <button
//         onClick={handleLogOut}
//         className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
//       >
//         <IoLogOut /> Logout
//       </button>
//     </li>
//   </ul>
// </div>
