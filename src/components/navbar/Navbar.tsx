import { CiLocationOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
function Navbar() {
  return (
    <div>
      <div className="w-full navbarComponent bg-[#EDEEF2]">
        <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
          <div className="flex items-center justify-between w-full py-2 md:py-3 navbar">
            <div className="flex items-center justify-center cursor-pointer navbarLeft ">
              <CiLocationOn className="text-xl acas" />
              &nbsp; <p className="text-xs">Farg'ona</p>
            </div>
            <div className="flex gap-5 md:gap-10 navbarRight ">
              <select className="p-1 text-xs md:text-sm border rounded bg-[#EDEEF2] ">
                <option value="uz">O'zb</option>
                <option value="ru">Русс</option>
                <option value="en">Eng</option>
              </select>
              <div className="flex items-center justify-center cursor-pointer phone">
                <MdLocalPhone />
                &nbsp;
                <a
                  href="tel:+998976611747"
                  className="text-xs md:text-sm  hover:text-gray-600"
                >
                  +998976611747
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
