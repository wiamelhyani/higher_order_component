import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/admin-context";
import routeConfig from "../route-config";

// eslint-disable-next-line react/display-name
const auth = (Component: React.FC) => (props: any) => {
  const router = useRouter();
  const { user, isAuthenticated } = useContext(UserContext);
  const [isValidRoute, setIsValidRoute] = useState(false);

  useEffect(() => {
    console.log(isAuthenticated);

    if (user && isAuthenticated) {
      setIsValidRoute(false);
      console.log(routeConfig.auth.default);

      router.push("/");
    } else setIsValidRoute(true);
  }, [user]);

  return isValidRoute ? <Component {...props} /> : null;
};

export default auth;
