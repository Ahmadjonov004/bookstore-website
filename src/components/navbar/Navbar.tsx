import { CiLocationOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
function Navbar() {
  return (
    <div>
      <div className="w-full navbarComponent bg-[#EDEEF2]">
        <div className="container max-w-6xl mx-auto my-0">
          <div className="flex items-center justify-between w-full py-3 navbar">
            <div className="flex items-center justify-center cursor-pointer navbarLeft ">
              <CiLocationOn className="text-xl acas"/>
              &nbsp; <p className="text-xs">Toshkent</p>
            </div>
            <div className="flex gap-10 navbarRight ">
              <select
              className="p-1 text-sm border rounded bg-[#EDEEF2] "
              >
                <option value="uz">O'zb</option>
                <option value="ru">Русс</option>
                <option value="en">Eng</option>
              </select>
              <div className="flex items-center justify-center cursor-pointer phone">
              <MdLocalPhone />
              &nbsp;
              <p className="text-sm">+998999999999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
