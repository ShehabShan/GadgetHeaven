import { useState } from "react";
import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";
import Image from "../../assist/add-data.png";
import useAuth from "../../Hooks/useAuth";

import useAxiosPublic from "../../Hooks/useAxiosPublic";

function AddReview({ id }) {
  const [postDate, setPostDate] = useState(new Date());
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());

    const formattedPostDate = format(postDate, "yyyy-MM-dd");

    initialData.reviewer_postDate = formattedPostDate;
    initialData.reviewer_email = user?.email;
    initialData.reviewer_name = user?.displayName;
    initialData.reviewer_photo = user?.photoURL;
    initialData.scholarShip_id = id;

    console.log(initialData);

    try {
      const { data } = await axiosPublic.post("/addReviews", initialData);
      console.log(data.data);
      if (data.data.insertedId) {
        e.target.reset();
      }
    } catch (error) {
      console.log("add scholership error", error);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 border  ">
      <form
        onSubmit={handleSubmit}
        className="card w-full max-w-[900px] mx-auto shadow-lg bg-white"
      >
        <div className="card-header text-center p-4 border-b">
          <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full">
            <img
              src={Image}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">University Scholarship</h2>
          <p className="text-gray-600">
            Computer Science Undergraduate Program
          </p>
        </div>
        <div className="card-body p-6 space-y-6">
          {/* University Information */}

          {/* Scholarship Details */}
          <div className="form-control">
            <label className="label">Comment</label>
            <textarea
              rows="4"
              cols="40"
              type="text"
              name="comment"
              placeholder="write your comment"
              className="border border-black"
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">Post Date</label>

            <button
              className="btn btn-outline w-full flex items-center justify-between"
              name="reviewDate"
              onClick={() => setPostDate(new Date())}
            >
              <FaCalendarAlt className="mr-2" />
              {postDate ? format(postDate, "PPP") : "March 15, 2025"}
            </button>
          </div>

          <div className="form-control">
            <label className="mb-3">React Rating</label>
            <select
              className="border border-black p-3 font-bold text-xl rounded-lg w-1/3"
              name="rating"
              defaultValue={1}
              required
            >
              <option disabled>Rating point</option>
              <option value={1}>1</option>
              <option value={2}> 2</option>
              <option value={3}> 3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          {/* Fees Information */}

          <button className="btn btn-primary w-full">Add Comment</button>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
