import Swal from "sweetalert2";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ManageScholarCard from "../../ModaratorPages/ManageScholarships/ManageScholareCard";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import MyApplicationCard from "./MyApplicationCard";

const MyApplication = () => {
  const [myScholership, setMyScholership] = useState();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  console.log(myScholership);

  useEffect(() => {
    axiosPublic.get(`/allScholership?email=${user?.email}`).then((res) => {
      setMyScholership(res.data.data);
    });
  }, [user?.email, axiosPublic]);

  return (
    <div>
      <h2 className="text-3xl text-emerald-600 font-bold text-center my-8">
        Manage Scholership
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myScholership?.map((scholarship, index) => (
          <MyApplicationCard
            key={index}
            scholarship={scholarship}
          ></MyApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default MyApplication;
