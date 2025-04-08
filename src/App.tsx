import "./App.css"
import Banner from "./components/banner/Banner"
import FooterBanner from "./components/banner/FooterBanner"
import Collection from "./components/collection/Collection"
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
      
    </div>
  )
}

export default App