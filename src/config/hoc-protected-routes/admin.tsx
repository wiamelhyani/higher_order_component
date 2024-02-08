import React, { useContext, useEffect, useState } from "react";
import routeConfig from "../route-config";
import { useRouter } from "next/router";
import { UserContext } from "@/context/admin-context";
import Roles from "../roles";

const Admin = (Component: React.FC) => {
  const AdminWrapper: React.FC = (props: any) => {
    const router = useRouter();
    const { user } = useContext(UserContext);
    const [isValidRoute, setIsValidRoute] = useState(false);

    useEffect(() => {
      console.log(user);
      if (user && !isValidRoute) {
        if (routeConfig[Roles.admin]) {
          router.push(routeConfig[Roles.admin].default);
          setIsValidRoute(true);
          console.log(user.role);
        } else if (routeConfig[Roles.super_admin]) {
          router.push(routeConfig[Roles.super_admin].default);
          setIsValidRoute(true);
          console.log(user.role);
        } else {
          router.push(routeConfig.auth.default);
        }
      }
    }, [router, user, isValidRoute]);

    return isValidRoute ? <Component {...props} /> : null;
  };

  return AdminWrapper;
};

export default Admin;
