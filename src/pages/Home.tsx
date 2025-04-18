import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Collection from "@/components/collection/Collection";
import Products from "@/components/products/Products";
import Testimonial from "@/components/testimonial/Testimonial";
import FooterBanner from "@/components/banner/FooterBanner";
import Footer from "@/components/footer/Footer";
import { useState, useEffect } from "react";

interface HomeProps {
  isRegistered: boolean;
  onLoginClick: () => void;
}

const Home: React.FC<HomeProps> = ({ isRegistered, onLoginClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setIsLoggedIn(isRegistered);
  }, [isRegistered]);

  return (
    <div>
      {/* Header */}
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        onLoginClick={onLoginClick}
      />

      {/* Banner */}
      <Banner />

      {/* Collection */}
      <Collection />

      {/* Products */}
      <Products />

      {/* Testimonials */}
      <Testimonial />

      {/* Footer Banner */}
      <FooterBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
