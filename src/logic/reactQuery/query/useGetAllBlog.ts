import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";

const getAllBlog = async () => {
  const { data } = await axiosInstance.get(`${apiEndPoints?.getAllBlog}`);
  return data;
};

export const useGetAllBlog = () => {
  const { data, isError, isFetching, isLoading } = useQuery(
    "getAllBlog",
    getAllBlog,
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};
