import { useMutation } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";

interface I_CreateBlogProps {
  image: string;
  heading: string;
  description: string;
  category: string;
}

const createBlog = (options: I_CreateBlogProps) => {
  const url = apiEndPoints?.createBlog;
  return axiosInstance.post(url, options);
};

export const useCreateBlogMutation = () => {
  return useMutation(createBlog);
};
