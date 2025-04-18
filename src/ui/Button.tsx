
import { useNavigate } from "react-router-dom";
import "../App.css"
function Btn() {
  
  const navigate = useNavigate();
  return (
    <button  onClick={() => navigate('/')}  className="bg-black text-white py-1 md:py-2 px-4 md:px-8 text-[14px] md:text-base rounded-xl hover:bg-white hover:text-black transition duration-300">
    Sotib olish
  </button>
  
  )
}

export default Btn


