import { axiosClient } from "./AxiosInstance";
import { IAdmin } from "../components/admin/modal";

export const getAdmins = (page: number) => {
  return axiosClient.get(`/users?page=${page}`);
};
