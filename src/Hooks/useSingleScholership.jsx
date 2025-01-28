import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSingleScholership = (id) => {
  const axiosPublic = useAxiosPublic();

  const { user } = useAuth();

  const { refetch, data: scholarship = [] } = useQuery({
    queryKey: ["singleScholership", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allScholership/${id}`);

      return res.data.data;
    },
  });

  return [scholarship, refetch];
};

export default useSingleScholership;
