import FooterBanner from "@/components/banner/FooterBanner"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import ProductDetail from "@/components/products/ProductDetail"
import Products from "@/components/products/Products"
import Testimonial from "@/components/testimonial/Testimonial"

function ProductDetailPage() {
  return (
    <div>
      <Navbar/>

      {/* filterItems */}
      

       {/* product deteil */}
       <ProductDetail/>

      {/* products */}
      <Products/>

      {/* testimanial */}
      <Testimonial />

      {/* footer banner or order */}
      <FooterBanner />

      {/* footer */}
      <Footer />
    </div>
  )
}

export default ProductDetailPage