import React from "react";
import Axios from "axios";
import { environment } from "../../environment";

export const axiosClient = Axios.create({
  baseURL: environment.AUTH_API_URL,
});
