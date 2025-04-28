
import ButtonWhite from "../../ui/ButtonWhite";
import "../../App.css"
function FooterBanner() {
  return (
    <div className="FooterBannerComponent w-full mb-12">
      <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
        <div className="FooterBanner w-full rounded-[20px] pt-[25px] sm:pt-[45px] pl-[30px] sm:pl-[60px] md:pl-[170px] pb-[30px] md:pb-[54px] mb-12">
          <h1 className="text-[22px] md:text-[30px] font-medium max-w-[464px] text-white">
          Sevimli kitoblaringizni biz bilan toping
          </h1>
          <p className="text-[14px] sm:text-sm font-light mb-10 mt-[10px]  text-white">Hayotingizni o‘zgartiradigan asarlarni hoziroq toping va o‘qishga shoshiling</p>
          
          <a href="#kitoblar"><ButtonWhite /></a>
       </div>
       <hr />
      </div>
    </div>
  )
}

export default FooterBanner