import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";

const MyUpdatedJob = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleJobUpdate = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      summary: e.target.summary.value,
      coverImage: e.target.image.value,
    };
    fetch(`http://localhost:3000/allJobs/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully updated !");
        console.log(data);
        navigate("/myAddedJobs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-3xl text-center font-bold mb-2">
        Job <span className="text-[#AD49E1]">Update</span>
      </h2>
      <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body">
          <form onSubmit={handleJobUpdate}>
            <fieldset className="fieldset">
              {/* title */}
              <label className="label">Title of the Job</label>
              <input
                type="text"
                name="title"
                defaultValue={data.title}
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Title"
              />

              {/* category */}
              <div>
                <label className="label mb-2">Category</label>
                <select
                  defaultValue={data.category}
                  name="category"
                  required
                  className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphics Designing">Graphics Designing</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="App Development">App Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* summary */}
              <div>
                <label className="label">Summary</label>
                <textarea
                  name="summary"
                  required
                  rows="3"
                  defaultValue={data.summary}
                  className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                  placeholder="about the Job...."
                ></textarea>
              </div>
              {/* coverImage */}
              <label className="label">coverImage</label>
              <input
                type="text"
                name="image"
                defaultValue={data.coverImage}
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="coverImage"
              />
              <button
                className="btn text-white mt-4 rounded-full bg-linear-to-r from-[#7A1CAC] to-[#AD49E1]
 "
              >
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyUpdatedJob;
