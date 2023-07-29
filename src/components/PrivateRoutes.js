import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogged } from "../auth";
import { toast } from "react-toastify";

export default function PrivateRoutes() {
  if (isLogged()) {
    return <Outlet />;
  } else {
    toast.warn("plz login first");
    return <Navigate to={"/login"} />;
  }
}
