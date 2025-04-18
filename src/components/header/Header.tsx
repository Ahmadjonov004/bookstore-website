import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import RegisterModal from "../register/RegisterModal";
import Navbar from "../navbar/Navbar";
import "../../App.css";
import { useNavigate } from "react-router-dom";

// 1. Props interfeysini aniqlang
interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  onLoginClick: () => void;
}

function Header({ isLoggedIn, setIsLoggedIn }: HeaderProps) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleRegister = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModal = () => {
    setShowRegisterModal(false);
  };

  const handleRegisterSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setShowRegisterModal(false);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="headerSection w-full mt-2">
        <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
          <div className="header flex items-center justify-between w-full py-2 md:py-3">
            <div className="logo text-xl font-bold">ESHIK DERAZA</div>

            <div className="hidden md:flex items-center justify-between py-2 px-4 border-2 search rounded-xl">
              <input
                type="text"
                placeholder="Nomi va turi bo’yicha qidiruv"
                className="border-none inputSearch outline-none hidden md:block md:w-[500px] text-base"
              />
              <CiSearch className="text-xl md:text-2xl" />
            </div>

            <div className="ietms flex gap-3 md:gap-5 items-center justify-center">
              <div className="shopIcon">
                <MdOutlineShoppingBag className="text-2xl" />
              </div>
              <div className="likeIcon">
                <FaRegHeart className="text-xl" />
              </div>

              {isLoggedIn ? (
                <div className="profilImage " onClick={() => navigate(`/profil`)}>
                  <img
                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                    alt="Profile"
                    className="w-10 h-auto rounded-full"
                  />
                </div>
              ) : (
                <button
                  onClick={handleRegister}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 active:scale-95 transition"
                >
                  Kirish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showRegisterModal && (
        <RegisterModal
          onClose={handleCloseModal}
          onSuccess={handleRegisterSuccess}
        />
      )}
    </div>
  );
}

export default Header;
