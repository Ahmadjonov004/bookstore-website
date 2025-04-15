import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Collection from "@/components/collection/Collection";
import Products from "@/components/products/Products";
import Testimonial from "@/components/testimonial/Testimonial";
import FooterBanner from "@/components/banner/FooterBanner";
import Footer from "@/components/footer/Footer";

function Homes() {
  return (
    <div>
      {/* header */}
      <Header />
      
      {/* banner */}
      <Banner />

      {/* collection */}
      <Collection />

      {/* products */}
      <Products />

      {/* testimanial */}
      <Testimonial />

      {/* footer banner or order */}
      <FooterBanner />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Homes;
