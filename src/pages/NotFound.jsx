import React from "react";
import { Link } from "react-router";
import broken from "../assets/broken.jpg";

const NotFound = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src={broken}
        alt="broken bridge"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-black">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Oops! Page Not Found
        </h1>
        <p className="text-lg mb-6 drop-shadow">
          Looks like the bridge is broken. Let's get you back!
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="  px-5 py-2 rounded-lg font-semiboldtransition bg-[#7A1CAC] hover:bg-[#AD49E1] text-white"
          >
            Go Home
          </Link>
          <Link
            to="/allJobs"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#7A1CAC] transition"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default NotFound;
