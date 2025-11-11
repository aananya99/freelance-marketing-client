import React from "react";
import { FaRocket, FaShieldAlt, FaClock, FaUsers } from "react-icons/fa";
const Featured = () => {
  return (
    <div className="w-full mx-auto my-10 space-y-5 ">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-3xl font-bold">
          Learn, Grow & Connect with <span className="text-[#AD49E1]">TaskBridge</span>
        </h2>
      </div>

      {/* why choose  */}

      <div className="flex flex-col space-y-2 items-left">
        <h2 className="text-xl font-semibold">Why Choose us ?</h2>
        <p className="text-gray-500 mb-5">
          {" "}
          We make job hunting easier and faster with top features for every
          user.
        </p>
      </div>

      <div className="grid  grid-cols-2 md:grid-cols-4 gap-5">
        <div className="card w-full  card-sm shadow-sm">
          <div className="card-body ">
            <FaRocket size={30} className="text-[#AD49E1]"></FaRocket>
            <h2 className="card-title">Fast Hiring</h2>
            <p>
              Find your ideal job quickly with our streamlined platform. Apply
              and get responses from top employers without any delay
            </p>
          </div>
        </div>
        <div className="card w-full card-sm shadow-sm">
          <div className="card-body">
            <FaShieldAlt size={30} className="text-[#AD49E1]"></FaShieldAlt>
            <h2 className="card-title">Verified Employers</h2>
            <p>
              All our listed companies are verified to ensure you work with
              trustworthy and legitimate organizations.
            </p>
          </div>
        </div>
        <div className="card w-full  card-sm shadow-sm">
          <div className="card-body">
            <FaClock size={30} className="text-[#AD49E1]"></FaClock>
            <h2 className="card-title">Flexible Jobs</h2>
            <p>
              Explore jobs that fit your schedule and lifestyle, whether
              full-time, part-time, or freelance.
            </p>
          </div>
        </div>
        <div className="card w-full  card-sm ">
          <div className="card-body">
            <FaUsers size={30} className="text-[#AD49E1]"></FaUsers>
            <h2 className="card-title">Expert Support</h2>
            <p>
              Our team is always ready to guide you through every step, making
              your job search smooth and hassle-free.
            </p>
          </div>
        </div>
      </div>
    {/* people */}
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
       
        <div className="col-span-7">
          <div className="flex flex-col space-y-2 items-left mt-5">
            <h2 className="text-xl font-semibold">
              People Love Working with TaskBridge
            </h2>
            <p className="text-gray-500 mb-5">
              From job seekers to industry experts, people rely on TaskBridge
              for a smooth and reliable experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">4.9/5</h3>
              <p>
                Clients rate professionals on TaskBridge
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">90%</h3>
              <p>
                90% of customers are satisfied with their hiring experience.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">Award Winner</h3>
              <p>G2’s 2025 Best Software Awards</p>
            </div>
          </div>
        </div>
        <div className="col-span-5 ">
          <div className="card bg-base-100 w-full shadow-sm border border-[#AD49E1] mt-5">
            <div className="card-body">
              <h2 className="card-title">Great Work</h2>
              <p>
                “TaskBridge helped me find a job faster than I expected. The
                process was smooth and simple.”
              </p>
              <div className="card-actions flex items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://plus.unsplash.com/premium_photo-1723575669052-c6fceafc6fa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1154" />
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <h3>Anika Rahman</h3>
                  <p>Front-End Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
