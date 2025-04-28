import faqImg from "../../assets/images/faqImg.png";
import alisher from "../../assets/images/aisher.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const testimonials = [
  {
    name: "Ali Valiyev",
    position: "Kitobxon",
    message:
      "“Uzoq vaqt izlagan kitobimni shu do‘kondan topdim! Narxlari hamyonbop va yetkazib berish juda tez edi. Albatta yana buyurtma beraman.”",
  },
  {
    name: "Dilnoza Karimova",
    position: "O‘qituvchi",
    message:
      "“Bolalar uchun ertak kitoblari sifati juda zo‘r! O‘g‘lim ham, men ham juda mamnunmiz. Xizmat darajasi a'lo darajada.”",
  },
  {
    name: "Jamshid Rustamov",
    position: "Talaba",
    message:
      "“Ilmiy kitoblar to‘plami juda boy. Imtihonlarga tayyorgarlik ko‘rayotganda aynan shu do‘kon menga katta yordam berdi.”",
  },
  {
    name: "Muhammad Ali",
    position: "Tadbirkor",
    message:
      "“Biznes va motivatsion kitoblarni topish oson bo‘ldi. Yetkazib berish va mijozlarga xizmat darajasi meni hayratda qoldirdi.”",
  },
  {
    name: "Zarina Raxmatova",
    position: "Ota-ona",
    message:
      "“Har doim yangilangan yangi kitoblar kelib turadi. Oila a'zolarim bilan tez-tez buyurtma qilamiz. Juda minnatdorman!”",
  },
];


function Testimonial() {
  return (
    <div className="faqSection w-full">
      <div className="container max-w-[1200px] px-[10px] mx-auto my-0  ">
        <h1 className="text-2xl md:text-[35px] font-medium mb-8 mt-8">Mijozlar fikri</h1>
        <div className="faq w-full flex gap-[30px]  justify-between items-center  mb-[90px]">
          <div className="carousel w-full ">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full "
            >
              <CarouselContent className="-mt-1 max-h-[200px]  md:max-h-[500px] flex gap-[15px] ">
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2 bg-[#F3F3F3] rounded-[20px]">
                    <div className="p-1 flex-col items-start border rounded-[10px] py-[30px] pl-[30px] pr-[50px] ">
                      <div className="text-[12px] md:text-sm font-light mb-[15px]">{item.message}</div>
                      <div className="flex gap-2">
                        <img src={alisher} alt="#" />
                        <div className="">
                          <div className="text-sm font-light">{item.name}</div>
                          <div className="text-[9px] text-[#777777] font-light">{item.position}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=""  />
              <CarouselNext className="" />
            </Carousel>
          </div>

          <div className="faqImg w-full max-w-[670px] rounded-[20px] hidden md:block">
            <img src={faqImg} alt="faqImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
