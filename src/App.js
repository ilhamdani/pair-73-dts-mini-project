import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from './containers/LoginPage';
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import HomePage from "./containers/HomePage";
import NavBar from "./components/NavBar";
import DetailPage from "./containers/DetailPage";

function App() {
  return (
    <Routes>
        {/* Kita akan gunakan di sini dan nge-slot App */}
        <Route
          path="*"
          element={
            <ProtectedComponent>
              <NavBar />
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="detail"
          element={
            <>
              <NavBar />
              <DetailPage />
            </>
          }
        />
    </Routes>
  );
}

export default App;
