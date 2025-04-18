import FooterBanner from "@/components/banner/FooterBanner"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import FilterItems from "@/components/products/FilterItems"
import ProductDetail from "@/components/products/ProductDetail"
import Products3 from "@/components/products/Products3"
import Testimonial from "@/components/testimonial/Testimonial"

function ProductDetailPage() {
  return (
    <div>
      <Navbar/>

      {/* filterItems */}
      <FilterItems/>

       {/* product deteil */}
       <ProductDetail/>

      {/* products */}
      <Products3/>

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