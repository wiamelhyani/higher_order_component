import Roles from "./roles";
import { AppRoutes } from "./app-routes";

const routeConfig: { [key: string]: { [key: string]: string } } = {
  auth: {
    default: AppRoutes.login,
    [AppRoutes.login]: AppRoutes.login,
  },
  [Roles.admin]: {
    default: AppRoutes.dashboard,
    [AppRoutes.dashboard]: AppRoutes.dashboard,
  },
  [Roles.super_admin]: {
    default: AppRoutes.users_detailes,
    [AppRoutes.users_detailes]: AppRoutes.users_detailes,
  },
};

export default routeConfig;
