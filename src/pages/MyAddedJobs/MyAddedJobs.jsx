import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import JobCard from "../../components/JobCard";
import { Link } from "react-router";

const MyAddedJobs = () => {
  const { user, loading } = use(AuthContext);
  const [addedJobs, setAddedJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myAddedjobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAddedJobs(data);
        });
    }
  }, [user?.email]);

  if (loading) {
    return (
      <p className="text-center text-xl font-semibold mt-10">Loading...</p>
    );
  }

  if (addedJobs.length === 0) {
    return (
      <p className="text-center text-xl font-semibold mt-10">
        You haven't added any jobs yet.
      </p>
    );
  }
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center">
        My Added jobs: {addedJobs.length}{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {addedJobs.map((job) => (
          <div className="card bg-base-100 image-full w-full shadow-sm ">
            <figure>
              <img src={job.coverImage} />
            </figure>
            <div className="card-body py-12">
              <h2 className="text-2xl font-bold text-white">{job.title}</h2>
              <p className="text-white text-xl font-semibold">
                {" "}
                Category: {job.category}
              </p>
              <div className="card-actions justify-between">
                <Link to={`/updateJob/${job._id}`}>
                  <button className="btn btn-primary">Update </button>
                </Link>
                <button className="btn btn-primary">Delete </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedJobs;
