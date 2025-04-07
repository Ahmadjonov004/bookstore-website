import "./App.css"
import Banner from "./components/banner/Banner"
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

    </div>
  )
}

export default App