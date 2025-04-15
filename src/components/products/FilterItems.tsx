

function FilterItems() {
  return (
    <div className="container max-w-[1200px] px-[10px] mx-auto my-0" >
        <div className="py-[8px] md:py-[13px] flex justify-between  mb-[40px] border-y">
        <div className=" flex justify-center items-center gap-[15px] md:gap-[50px] text-[#BBBBBB] pl-[15px] md:pl-[25px] text-[12px] md:text-[17px]">
            <p className=" hover:text-black transition duration-300">Eshiklar</p>
            <p className=" hover:text-black transition duration-300">Derazalar</p>
            <p className=" hover:text-black transition duration-300">Top</p>
            <p className=" hover:text-black transition duration-300">Chegirma</p>
            <p className=" hover:text-black transition duration-300">Brendlar</p>
        </div>
        <div className="cursor-pointer p-[5px] border rounded-[5px] text-[12px] md:text-[16px] transition duration-300 hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] mr-[15px] ">
            Filter
        </div>
      </div>
    </div>
  )
}

export default FilterItems