
import ButtonWhite from "../../ui/ButtonWhite";
import "../../App.css"
function FooterBanner() {
  return (
    <div className="FooterBannerComponent w-full mb-12">
      <div className="container max-w-6xl mx-auto my-0">
        <div className="FooterBanner w-full rounded-[20px] pt-[45px] pl-[170px] pb-[54px] mb-12">
          <h1 className="text-[30px] font-medium max-w-[464px] text-white ">
                Uyingizga mos bo’lgan uslubni biz bilan yarating
          </h1>
          <p className="text-sm font-light mb-10 mt-[10px]  text-white">Uslubni yaratishda bizning maxsus xodimlarimiz sizga yordam berishadi</p>
          <ButtonWhite />
       </div>
       <hr />
      </div>
    </div>
  )
}

export default FooterBanner