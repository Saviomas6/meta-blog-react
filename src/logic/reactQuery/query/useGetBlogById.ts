import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";

const getBlogById = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.getBlogById}/${id}`
  );
  return data;
};

export const useGetBlogById = (id: string | undefined) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ["getBlogById", id],
    () => getBlogById(id),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};
