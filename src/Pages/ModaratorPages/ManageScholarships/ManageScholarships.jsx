import { useEffect, useRef, useState } from "react";
import useScholership from "../../../Hooks/useScholership";
import ManageScholarCard from "./ManageScholareCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllScholership = () => {
  const [allScholership, refetch] = useScholership();

  const axiosPublic = useAxiosPublic();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosPublic.delete(`/allScholership/${_id}`);
          console.log(data.data);
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        } catch (error) {
          console.log("Scholership delete ERROR", error);
        }
      }
    });
  };

  console.log(allScholership);

  return (
    <div>
      <h2 className="text-3xl text-emerald-600 font-bold text-center my-8">
        Manage Scholership
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allScholership.map((scholarship, index) => (
          <ManageScholarCard
            key={index}
            scholarship={scholarship}
            handleDelete={handleDelete}
          ></ManageScholarCard>
        ))}
      </div>
    </div>
  );
};

export default AllScholership;
