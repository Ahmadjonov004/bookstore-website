import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function SlideBanner() {
  return (
    <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
      <Carousel>
  <CarouselContent>
    {/* Slide 1 */}
    <CarouselItem>
      <div className="relative w-full h-[200px] lg:h-[300px] rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
          alt="New books"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-xl md:text-4xl font-bold mb-2">Eng yangi kitoblar shu yerda!</h2>
          <p className="text-[12px] md:text-lg mb-4">Har hafta yangilanadigan bestsellerlar jamlanmasi.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-5 py-1 md:py-2 rounded-full text-[12px] md:text-base transition">Ko‘rish</button>
        </div>
      </div>
    </CarouselItem>

    {/* Slide 2 */}
    <CarouselItem>
      <div className="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80"
          alt="Free delivery"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2"> Bepul yetkazib berish!</h2>
          <p className="text-sm md:text-lg mb-4">100 000 so‘mdan ortiq xaridlar uchun!</p>
          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-1 md:py-2 rounded-full text-sm md:text-base transition">Hozir buyurtma berish</button>
        </div>
      </div>
    </CarouselItem>

    {/* Slide 3 */}
    <CarouselItem>
      <div className="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://images.unsplash.com/photo-1630948197307-26e135c97118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Discount week"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2"> Chegirmalar haftaligi boshlandi!</h2>
          <p className="text-sm md:text-lg mb-4">30% gacha chegirmalar sizni kutmoqda!</p>
          <button className="bg-pink-500 hover:bg-pink-600 px-5 py-1 md:py-2 rounded-full text-sm md:text-base transition">Aksiyani ko‘rish</button>
        </div>
      </div>
    </CarouselItem>
  </CarouselContent>

</Carousel>

    </div>
  );
}

export default SlideBanner;
