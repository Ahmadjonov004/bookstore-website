import ikkitaEshik from "../../assets/images/2ta-eshik.png";
import bolacha from "../../assets/images/bolacha.png";
import kitchen from "../../assets/images/citchenRoom.png";
import kreslo from "../../assets/images/kreslo.png";
import qizilEshik from "../../assets/images/qizilEshik.png";

function Collection() {
  return (
    <div>
      <div className="collectionComponents w-full ">
        <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
          <div className="collection w-full">
            <h1 className="text-3xl md:text-4xl font-medium mt-[40px] md:mt-[60px] mb-[30px]">Kolleksiyalar</h1>
            <div className="flex flex-col gap-[30px] mb-[60px]">
              <div className="flex flex-wrap gap-[20px]">
                <img src={kitchen} alt="#" className="w-full max-w-[380px]" />
                <img src={ikkitaEshik} alt="#" className="w-full max-w-[380px]"/>
                <img src={qizilEshik} alt="#" className="w-full max-w-[380px]" />
              </div>
              <div className="flex flex-wrap gap-[30px]">
                <img src={kreslo} alt="#"  className="w-full max-w-[590px]"/>
                <img src={bolacha} alt="#" className="w-full max-w-[430px] md:max-w-[560px]" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
