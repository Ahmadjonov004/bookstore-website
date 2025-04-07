
import Btn from "../../ui/Button"
import bannerImg from "../../assets/images/banner.png";

function Banner() {
  return (
    <div className="bannerComponent w-full">
      <div className="container max-w-6xl mx-auto my-0">
        <div className="banner w-full rounded-[20px] pt-[80px] pl-[100px] pb-[82px] bg-[#EDEEF2]">
          <h1 className="text-[40px] uppercase font-bold ">
          Katta chegirma
          </h1>
          <p className="text-base font-light mb-10 w-full max-w-[350px] text-[#454545]">MDF eshiklarini 40% chegirma narxda sotib 
          olishga ulgurib qoling</p>
          <Btn />
          <img src={bannerImg} alt="banner" className="bannerImg absolute top-0 right-[10px]" />
          <h3 className="bannerRek uppercase bg-[#FF2020] py-[10px] px-[20px] absolute top-0 left-0 text-white text-base font-semibold ">chegirma</h3>
        </div>
      </div>
    </div>
  )
}

export default Banner