
function FilterItems() {
  return (
    <div className="container max-w-[1200px] px-[10px] mx-auto my-0" >
        <div className="py-[6px] md:py-[8px] flex justify-between  mb-[30px] border-y">
        <div className="flex justify-center items-center gap-[15px] md:gap-[50px] text-[#BBBBBB] pl-[10px] md:pl-[20px] text-[11px] md:text-[14px]">
            <p className="hover:text-black transition duration-300">Barchasi</p>
            <p className="hover:text-black transition duration-300">Ilmiy </p>
            <p className="hover:text-black transition duration-300">Bolalarga</p>
            <p className="hover:text-black transition duration-300">Badiiy</p>
            <p className="hover:text-black transition duration-300">Yangi</p>
        </div>
        <div className="cursor-pointer p-[5px] border rounded-[5px] text-[10px] md:text-[12px] transition duration-300 hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] mr-[15px] ">
            Filtr
        </div>
      </div>
    </div>
  )
}

export default FilterItems
