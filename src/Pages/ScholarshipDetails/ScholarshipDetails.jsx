import { useRef, useState } from "react";
import {
  FaUniversity,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaInfoCircle,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import AddReview from "../AddReview/AddReview";
import useSingleScholership from "../../Hooks/useSingleScholership";

const ScholarshipDetails = () => {
  const { id } = useParams();
  // const [scholarship, setScholarship] = useState({});
  const [scholarship] = useSingleScholership(id);

  const [isReview, setIsReview] = useState(false);
  const reviewRef = useRef(null);

  console.log(scholarship);

  const handleAddReviewClick = () => {
    setIsReview(!isReview);

    // Scroll to the AddReview section
    setTimeout(() => {
      reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 p-6 md:p-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Header Section */}
          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
              <div className="h-24 w-24 overflow-hidden rounded-xl bg-white p-2">
                <img
                  src={scholarship?.universityImage}
                  alt={`Logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold md:text-3xl">
                  {scholarship?.universityName}
                </h1>
                <p className="mt-2 text-lg opacity-90">
                  {scholarship?.scholarshipCategory} Scholarship in{" "}
                  {scholarship?.subjectName}
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid gap-8 p-8">
            {/* Basic Information */}
            <div className="grid gap-6 rounded-xl bg-gray-50 p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                <FaInfoCircle className="text-blue-600" />
                Basic Information
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-xl text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium">
                      {scholarship?.scholarshipCategory}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUniversity className="text-xl text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Subject</p>
                    <p className="font-medium">{scholarship?.subjectName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-xl text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">
                      {scholarship?.country}, {scholarship?.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-xl text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">
                      Application Deadline
                    </p>
                    <p className="font-medium">
                      {scholarship?.applicationDeadline}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-xl bg-gray-50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <FaInfoCircle className="text-blue-600" />
                Description
              </h2>
              <p className="text-gray-600">
                {scholarship?.scholarshipDescription}
              </p>
            </div>

            {/* Financial Information */}
            <div className="rounded-xl bg-gray-50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <FaMoneyBillWave className="text-blue-600" />
                Financial Details
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-4">
                  <p className="text-sm text-gray-600">Stiper</p>
                  <p className="text-2xl font-semibold text-blue-600">
                    ${scholarship?.stipend}
                  </p>
                </div>
                <div className="bg-white  p-4">
                  <p className="text-sm text-gray-600">Application Fees</p>
                  <p className="text-2xl font-semibold text-blue-600">
                    ${scholarship?.applicationFees}
                  </p>
                </div>
                <div className="bg-white  p-4">
                  <p className="text-sm text-gray-600">Service Charge</p>
                  <p className="text-2xl font-semibold text-blue-600">
                    ${scholarship?.serviceCharge}
                  </p>
                </div>
                <div className="bg-white  p-4">
                  <p className="text-sm text-gray-600">Post on</p>
                  <p className="text-2xl font-semibold text-blue-600">
                    {scholarship?.postDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Application Button */}
            <div className="flex gap-7">
              <Link className="w-full">
                <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-xl">
                  Apply Now
                </button>
              </Link>
              <Link className="w-full">
                <button
                  onClick={handleAddReviewClick}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-xl"
                >
                  {!isReview ? "Add Review" : "Cancle Review"}
                </button>
              </Link>
            </div>

            {/* Posted Date */}
            <p className="text-center text-sm text-gray-500">
              Posted on: {scholarship?.postDate}
            </p>
          </div>
        </div>
      </div>
      <div ref={reviewRef}>{isReview && <AddReview id={id}></AddReview>}</div>
    </div>
  );
};

export default ScholarshipDetails;
