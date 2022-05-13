import React, { useEffect } from "react";
import app from "./firebase.config";
import { useLocation, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Home from "../Pages/Home";
import LoginScreen from "../Pages/LoginScreen";

function ProtectedRoute({ children }) {
  const auth = getAuth();

  const user = auth.currentUser;
  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return <Home />;
  }
}

export default ProtectedRoute;
