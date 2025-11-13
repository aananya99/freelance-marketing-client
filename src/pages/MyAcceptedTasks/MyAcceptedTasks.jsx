import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const MyAcceptedTasks = () => {
  const { user } = useAuth();
  const [addedJobs, setAddedJobs] = useState([]);
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  // axiosInstance
  useEffect(() => {
    if (!user?.email) return;
    axiosInstance
      .get(`/my-accepted-tasks?email=${user.email}`)
      .then((data) => {
        // console.log("after axios get ", data.data);
        setAddedJobs(data.data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, axiosInstance]);

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
          .delete(`/my-accepted-tasks/${id}`)
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
        My <span className="text-[#AD49E1]">Accepted Tasks:</span>{" "}
        {addedJobs.length}{" "}
      </h2>
              <table className="table my-10 bg-[#EBD3F8]">
                <thead>
                  <tr>
                    <th className="text-black">#</th>
                    <th className="text-xl text-[#7A1CAC] italic underline">Category</th>
                    <th className="text-xl text-[#7A1CAC]  italic underline">Job Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addedJobs.map((job, index) => (
                    <tr key={job._id}>
                      <th className="text-black">{index + 1}</th>
                      <td className="text-[#7A1CAC] font-semibold">{job.category}</td>
                      <td className="text-[#7A1CAC] font-semibold">{job.title}</td>
                      <td>
                        {" "}
                        <Link to={`/updateJob/${job._id}`}>
                          <button className="btn  bg-[#7A1CAC] hover:bg-[#AD49E1] text-white">
                            Update{" "}
                          </button>
                        </Link>
                      </td>
                      <td><button
                        onClick={() => handleDelete(job._id)}
                        className="btn bg-[#7A1CAC] hover:bg-[#AD49E1] text-white"
                      >
                        Delete{" "}
                      </button></td>
                    </tr>
                  ))}
                </tbody>
              </table>

    </div>
  );
};

export default MyAcceptedTasks;
