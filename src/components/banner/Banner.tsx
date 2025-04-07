
import Btn from "../../ui/Button"

function Banner() {
  return (
    <div className="bannerComponent w-full">
      <div className="container max-w-6xl mx-auto my-0">
        <div className="banner w-full rounded-[20px] pt-[80px] pl-[100px] pb-[86px] bg-[#EDEEF2]">
          <h1 className="text-[40px] uppercase font-bold ">
          Katta chegirma
          </h1>
          <p className="text-base font-light mb-10 w-full max-w-[350px]">MDF eshiklarini 40% chegirma narxda sotib 
          olishga ulgurib qoling</p>
          <Btn />
        </div>
      </div>
    </div>
  )
}

export default Banner