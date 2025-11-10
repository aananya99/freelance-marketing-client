import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AddJob = () => {
  const { user } = use(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      postedBy: user.displayName,
      category: e.target.category.value,
      summary: e.target.summary.value,
      coverImage: e.target.image.value,
      userEmail: user.email,
      postedDate: new Date(),
    };
    fetch("http://localhost:3000/allJobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body">
          <form onSubmit={handleAddJob}>
            <fieldset className="fieldset">
              {/* title */}
              <label className="label">Title of the Job</label>
              <input
                type="text"
                name="title"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Title"
              />

              {/* category */}
              <div>
                <label className="label mb-2">Category</label>
                <select
                  defaultValue={""}
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
                  className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                  placeholder="about the Job...."
                ></textarea>
              </div>
              {/* coverImage */}
              <label className="label">coverImage</label>
              <input
                type="text"
                name="image"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="coverImage"
              />
              <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
                Add a Job
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
