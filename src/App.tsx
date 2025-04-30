import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterModal from "./components/register/RegisterModal";
import Profil from "./pages/Profil";
import ProductAddPage from "./components/adminPanel/ProductAddPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const isUserRegistered = localStorage.getItem("userRegistered") === "true";
    setIsRegistered(isUserRegistered);
  }, []);

  const handleSuccess = () => {
    localStorage.setItem("userRegistered", "true");
    setIsRegistered(true);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <RegisterModal onClose={handleClose} onSuccess={handleSuccess} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isRegistered={isRegistered}
              onLoginClick={() => setShowModal(true)}
            />
          }
        />
        <Route path="/productDetail/:id" element={<ProductDetailPage />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/addProduct" element={<ProductAddPage />} />
      </Routes>

      <ToastContainer />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
