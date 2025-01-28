import {
  FaUniversity,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="card  bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="px-6 pt-6">
        <img
          src={scholarship?.universityImage}
          alt={`logo`}
          className="rounded-xl h-32 w-32 object-cover bg-white p-2"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-gray-800">
          <FaUniversity className="text-indigo-600" />
          {scholarship?.universityName}
        </h2>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <FaGraduationCap className="text-indigo-500" />
            <span>
              {scholarship?.Postgraduate} - {scholarship?.subjectName}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-indigo-500" />
            <span>
              {scholarship?.city}, {scholarship?.country}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaClock className="text-indigo-500" />
            <span>Deadline: {scholarship?.applicationDeadline}</span>
          </div>

          <div className="flex items-center gap-2">
            <StarRatings
              rating={scholarship?.rating}
              starRatedColor="yellow"
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="2px"
            />
            <span className="text-sm text-gray-500">
              ({scholarship?.rating})
            </span>
          </div>
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <div className="text-lg font-semibold text-indigo-600">
            £{scholarship?.applicationFees}
          </div>
          <Link to={`/allScholership/${scholarship?._id}`}>
            <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-none hover:from-indigo-600 hover:to-blue-700">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
