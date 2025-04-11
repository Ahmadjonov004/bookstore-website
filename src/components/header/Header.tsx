import { CiSearch } from "react-icons/ci";
import Navbar from "../navbar/Navbar";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import "../../App.css";
function Header() {
  return (
    <div>
      <Navbar />
      <div className="headerSection w-full mt-2">
        <div className="container max-w-[1200px] px-[10px] mx-auto my-0 ">
          <div className="header flex items-center justify-between w-full py-2 md:py-3">
            <div className="logo text-xl font-bold">ESHIK DERAZA</div>
            <div className= "hidden md:flex items-center justify-between py-2 px-4 border-2 search rounded-xl">
              <input
                type="text"
                placeholder="Nomi va turi bo’yicha qidiruv"
                className="border-none inputSearch outline-none hidden md:block md:w-[500px] text-base "
              />
              <CiSearch className= "text-xl md:text-2xl " />
            </div>
            <div className="ietms flex gap-3 md:gap-5 items-center justify-center ">
              <div className="shopIcon">
                <MdOutlineShoppingBag className="text-2xl" />
              </div>
              <div className="likeIcon">
                <FaRegHeart className="text-xl" />
              </div>
              <div className="profilImage">
                <img
                  src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                  alt="Profile Image"
                  className="w-10 h-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
