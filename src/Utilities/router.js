import React from "react";
import app from "./firebase.config";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import LoginScreen from "../Pages/LoginScreen";
import ProtectedRoute from "./protectedRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
