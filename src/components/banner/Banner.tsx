
import Btn from "../../ui/Button"
import bannerImg from "../../assets/images/banner.png";

function Banner() {

  return (
    <div className="bannerComponent w-full">
      <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
        <div className="banner w-full rounded-[20px] pt-[50px] md:pt-[80px] pl-[30px] md:pl-[100px] pb-[42px] md:pb-[82px] bg-[#EDEEF2]">
          <h1 className="text-2xl md:text-[40px] uppercase font-semibold md:font-bold ">
          Katta chegirma
          </h1>
          <p className="text-sm md:text-base font-light mb-5 md:mb-10 w-full max-w-[350px] text-[#454545]">MDF eshiklarini 40% chegirma narxda sotib 
          olishga ulgurib qoling</p>
          <Btn/>
          <img src={bannerImg} alt="banner" className="bannerImg absolute top-0 right-[10px] hidden lg:block w-full max-w-[592px] " />
          <h3 className="bannerRek uppercase bg-[#FF2020] hover:bg-[#904141] transition duration-300 py-[6px] md:py-[10px] px-[16px] md:px-[20px] absolute top-0 left-0 text-white text-sm md:text-base font-semibold ">chegirma</h3>
        </div>
      </div>
    </div>
  )
}

export default Banner