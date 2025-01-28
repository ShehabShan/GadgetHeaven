import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useScholership = () => {
  const axiosPublic = useAxiosPublic();

  const { user } = useAuth();

  const { refetch, data: scholership = [] } = useQuery({
    queryKey: ["scholership", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get("/allScholership");
      return res.data.data;
    },
  });

  return [scholership, refetch];
};

export default useScholership;
