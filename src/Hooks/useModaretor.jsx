import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useModaretor = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isModaretor, isPending: isModaretorLoading } = useQuery({
    queryKey: [user?.email, "isModaretor"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/modaretor/${user.email}`);
      console.log("isModaretor log", res);
      return res.data?.isModaretor;
    },
  });

  return [isModaretor, isModaretorLoading];
};

export default useModaretor;
