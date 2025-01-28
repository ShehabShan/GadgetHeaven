import ScholarshipCard from "./ScholarshipCard";
import useScholership from "../../Hooks/useScholership";
import { useEffect, useRef, useState } from "react";

const AllScholership = () => {
  const [allScholership] = useScholership();
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce Timer
  const debounceTimer = useRef(null);

  // Search Handler with Debounce
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Clear existing debounce timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set a new debounce timer
    debounceTimer.current = setTimeout(() => {
      if (value) {
        const results = allScholership.filter((scholarship) =>
          scholarship.universityName?.toLowerCase().includes(value)
        );
        setFilteredScholarships(results);
      } else {
        setFilteredScholarships(allScholership);
      }
    }, 300); // 300ms delay
  };

  // Initialize filteredScholarships with all scholarships
  useEffect(() => {
    if (allScholership.length > 0 && filteredScholarships.length === 0) {
      setFilteredScholarships(allScholership);
    }
  }, [allScholership, filteredScholarships]);
  return (
    <div>
      <h2 className="text-3xl text-emerald-600 font-bold text-center my-8">
        All Scholership
      </h2>

      <div className="input input-bordered flex items-center w-[40%] mx-auto mt-5 mb-5">
        <input
          type="text"
          className="grow p-2 border rounded-md"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-90 mx-2"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholarships.map((scholarship, index) => (
          <ScholarshipCard
            key={index}
            scholarship={scholarship}
          ></ScholarshipCard>
        ))}
      </div>
    </div>
  );
};

export default AllScholership;
