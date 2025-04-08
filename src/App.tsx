import "./App.css"
import Banner from "./components/banner/Banner"
import FooterBanner from "./components/banner/FooterBanner"
import Collection from "./components/collection/Collection"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import "./index.css"
function App() {
  return (
    <div>
      <Header/>

      {/* banner */}
      <Banner/>

      {/* collection */}
      <Collection/>

      {/* footer banner or order */}
      <FooterBanner/>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default App