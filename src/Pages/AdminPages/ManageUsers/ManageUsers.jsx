import { useQuery } from "@tanstack/react-query";

import { FaTrash } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Swal from "sweetalert2";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data.data;
    },
  });

  const handleDelete = async (user) => {
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
          const { data } = await axiosSecure.delete(`/users/${user?._id}`);

          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleRoleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `make ${user?.email} an admin`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.patch(`/users/admin/${user?._id}`);
          console.log(data);
          if (data.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${user?.name} is an admin now`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        } catch (error) {
          console.log("admin patch error", error);
        }
      }
    });
  };

  const handleRoleModaretor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `make ${user?.email} an Modaretor`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.patch(
            `/users/modaretor/${user?._id}`
          );

          if (data.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${user?.name} is an Modaretor now`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        } catch (error) {
          console.log("admin patch error", error);
        }
      }
    });
  };

  const handleRoleUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `make ${user?.email} an user`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosPublic.patch(`/users/user/${user?._id}`);

          if (data.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${user?.name} is an User now`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        } catch (error) {
          console.log("admin patch error", error);
        }
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users.length}</h2>
      </div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr className="myTr">
                <th className="">No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="myTd" key={user?._id}>
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td className="space-x-3 flex flex-col pl-1 lg:flex-row">
                    <button
                      onClick={() => handleRoleAdmin(user)}
                      className="rounded-sm"
                    >
                      <p className="flex flex-col items-center ">
                        <FaPeopleGroup className=" text-white  w-10 h-8 bg-orange-500  "></FaPeopleGroup>
                        Admin
                      </p>
                    </button>

                    <button
                      onClick={() => handleRoleModaretor(user)}
                      className=" rounded-sm "
                    >
                      <p className="flex flex-col items-center">
                        <FaPeopleGroup className=" text-white  w-10 h-8 bg-orange-500 "></FaPeopleGroup>
                        modaretor
                      </p>
                    </button>
                    <button
                      onClick={() => handleRoleUser(user)}
                      className=" rounded-sm "
                    >
                      <p className="flex flex-col items-center">
                        <FaPeopleGroup className=" text-white  w-10 h-8 bg-orange-500 "></FaPeopleGroup>
                        User
                      </p>
                    </button>
                  </td>
                  <td>
                    {user?.role ? (
                      <p className="text-xl font-bold">{user?.role}</p>
                    ) : (
                      "User"
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user)}>
                      <FaTrash className="text-red-600 ml-4"></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
