import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import RegisterModal from "./components/register/RegisterModal";
import ProfileForm from "./components/profil/ProfileForm";
import Header from "./components/header/Header";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  

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
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLoginClick={() => {}} />
      {showModal && (
        <RegisterModal onClose={handleClose} onSuccess={handleSuccess} />
      )}

      <Routes>
        <Route path="/" element={<Home isRegistered={isRegistered} onLoginClick={() => setShowModal(true)}/>}/>
        <Route path="/productDetail/:slug" element={<ProductDetailPage />} />
        <Route path="/profil" element={<ProfileForm/>}/>
      </Routes>
    </>
  );
};

export default App;
