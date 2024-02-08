// dashboard.tsx
import React from "react";
import admin from "@/config/hoc-protected-routes/admin";
import Roles from "@/config/roles";

const Dashboard: React.FC = () => {
  return <div>dashboard</div>;
};

export default admin(Dashboard)([Roles.admin, Roles.super_admin]);
