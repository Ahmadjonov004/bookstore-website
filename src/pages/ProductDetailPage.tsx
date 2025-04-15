import FooterBanner from "@/components/banner/FooterBanner"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import FilterItems from "@/components/products/FilterItems"
import ProductDetail from "@/components/products/ProductDetail"
import Products3 from "@/components/products/Products3"
import Testimonial from "@/components/testimonial/Testimonial"

function ProductDetailPage() {
  return (
    <div>
       {/* header */}
       <Header />


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