import { motion } from "framer-motion";
import img from "../assets/banner2jpg.jpg";
import img1 from "../assets/banner1jpg.jpg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={img}
        alt="Clean home office with laptop and workspace"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>{" "}
      {/* optional dark overlay */}
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Trusted Freelance Marketplace
        </h1>
        <p className="mt-3 text-lg md:text-xl">
          Hire experts and get work done efficiently.
        </p>

        <Link to="/auth/login">
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg font-semibold bg-[#7A1CAC] hover:bg-[#AD49E1] text-white"
            >
              Create a Job
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-[#AD49E1] hover:bg-white hover:text-black rounded-lg font-semibold"
            >
              Why We’re Reliable
            </motion.button>
          </div>
        </Link>
      </motion.div>
      {/* Optional side image */}
      <motion.img
        src={img1}
        alt="Freelancer working from home on laptop"
        className="absolute bottom-0 right-0 w-1/3 hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      />
    </div>
  );
};

export default Banner;
