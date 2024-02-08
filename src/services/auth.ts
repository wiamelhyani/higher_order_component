import { axiosClient } from "./AxiosInstance";

export const getMe = () => {
  return axiosClient.get("/me");
};
