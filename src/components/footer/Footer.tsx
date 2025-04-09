import { CgMail } from "react-icons/cg";
import { CiFacebook, CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="FooterComponent w-full mb-4">
      <div className="container max-w-6xl mx-auto my-0">
        <div className="Footer w-full flex justify-between pb-[60px]">
          <div className="firstItem flex flex-col gap-[20px]">
            <div className="text-[20px] font-bold uppercase">Eshik deraza</div>
            <div className="flex flex-col">
              <p className="text-sm font-light">Qo’llab quvvatlash</p>
              <p className="text-[16px] font-medium cursor-pointer">+998999999999</p>
            </div>
            <div className=" flex flex-col gap-[6px] ">
              <div className="flex cursor-pointer">
                <CiLocationOn className="text-xl acas" />
                <div className="text-[16px] font-normal">Olmazor, Toshkent</div>
              </div>
              <div className="flex cursor-pointer">
                <CgMail className="text-2xl" />
                <div className="text-[16px] font-normal ">
                  Eshikrom@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="secondItem flex flex-col gap-[20px]">
            <div className="text-base font-semibold">Ma'lumotlar</div>
            <ul className="text-base flex flex-col gap-[10px] ">
              <li>Biz haqimizda</li>
              <li>To’lov va yetkazib berish</li>
              <li>Blog</li>
              <li className="w-full max-w-245px">
                To‘lovni qaytarish va tovarlarni almashtirish
              </li>
            </ul>
          </div>
          <div className="thirdItem flex flex-col mt-[40px]">
            <ul className="flex flex-col gap-[10px] ">
              <li >Eco-friendly</li>
              <li>Bonus va aksiyalar</li>
              <li>Servis markazlari</li>
              <li>Ommaviy oferta</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footerBottom flex justify-between pt-4 items-center ">
          <div className="text-xs font-normal text-[#808080]">
          © 2024. ООО "Eshikrom store"
          </div>
          <div className="text-xs font-normal text-[#808080]">Ommaviy oferta </div>
          <div className="text-xs font-normal text-[#808080]">Maxfiylik siyosati</div>
          <div className="flex text-xl gap-3 text-[#808080]">
          <a href="#"><FaTelegramPlane /></a>
           <a href="#"><CiFacebook /></a>
          <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
