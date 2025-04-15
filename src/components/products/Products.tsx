import Product from "./Product";
import doorProductImage from "../../assets/images/doors.png";

export const products = [
  {
    image: doorProductImage,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    price: "1 000 000 so‘m",
    oldPrice: "1 200 000 so‘m",
    discount: true,
    comments: 40,
  },
  {
    image: doorProductImage,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    price: "1 050 000 so‘m",
    oldPrice: "1 300 000 so‘m",
    discount: true,
    comments: 30,
  },
  {
    image: doorProductImage,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    price: "1 050 000 so‘m",
    oldPrice: "1 300 000 so‘m",
    discount: true,
    comments: 30,
  },
  {
    image: doorProductImage,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    price: "1 050 000 so‘m",
    oldPrice: "1 300 000 so‘m",
    discount: true,
    comments: 30,
  },
  {
    image: doorProductImage,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    price: "900 000 so‘m",
    oldPrice: "1 100 000 so‘m",
    discount: true,
    comments: 28,
  },
  {
    image: doorProductImage,
    name: "MDF Eshiklar",
    size: "120x200 sm",
    type: "1 qanotli",
    label: "MDF",
    price: "1 050 000 so‘m",
    oldPrice: "1 300 000 so‘m",
    discount: true,
    comments: 30,
  },
];
function Products() {
  return (
    <div className="productsSection mb-[40px]">
      <div className="container max-w-[1200px] px-[10px] mx-auto my-0 ">
      <div className="text-[35px] font-medium mb-[15px]">Mahsulotlar</div>
      <div className="py-[8px] md:py-[13px] flex justify-between  mb-[40px] border-y">
        <div className=" flex justify-center items-center gap-[15px] md:gap-[50px] text-[#BBBBBB] pl-[15px] md:pl-[30px] text-[12px] md:text-[17px]">
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
        <div className="filter"></div>
        <div className="products w-full grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-[30px]">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
