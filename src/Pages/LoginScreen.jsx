import React from "react";
import Authentication from "../Components/Authentication";
import { useLocation, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function LoginScreen() {
  return (
    <div>
      <Authentication />
    </div>
  );
}

export default LoginScreen;
