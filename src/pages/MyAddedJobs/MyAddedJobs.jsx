import React, { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import JobCard from "../../components/JobCard";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const MyAddedJobs = () => {
  const { user, loading } = useAuth();
  const [addedJobs, setAddedJobs] = useState([]);
  const navigate = useNavigate();
  const axiosInstance = useAxios();

// axiosInstance
  useEffect(() => {
    if (!user?.email) return;
    axiosInstance
      .get(`/myAddedjobs?email=${user.email}`)
      .then((data) => {
        console.log("after axios get ", data.data);
        setAddedJobs(data.data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, axiosInstance]);

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
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/allJobs/${id}`)
          .then((data) => {
            console.log(data.data);
            navigate("/allJobs");
            Swal.fire({
              title: "Deleted!",
              text: "Selected Job has been deleted ",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center">
        My <span className="text-[#AD49E1]">Added jobs:</span> {addedJobs.length}{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 my-10">
        {addedJobs.map((job) => (
          <div
            key={job._id}
            className="card bg-base-100 image-full w-full shadow-sm "
          >
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
                  <button className="btn  bg-[#7A1CAC] hover:bg-[#AD49E1] text-white">Update </button>
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="btn bg-[#7A1CAC] hover:bg-[#AD49E1] text-white"
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedJobs;
