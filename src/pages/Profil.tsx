import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import ProfileForm from "@/components/profil/ProfileForm"


function Profil() {
  return (
    <div>
        {/* navbar */}
        <Navbar/>

        {/* Profil Form */}
        <ProfileForm/>

        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Profil