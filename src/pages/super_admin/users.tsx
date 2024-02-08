import React from "react";
import admin from "@/config/hoc-protected-routes/admin";
import Roles from "@/config/roles";
const users: React.FC = () => {
  return <div>users</div>;
};
export default admin(users)([Roles.admin, Roles.super_admin]);
