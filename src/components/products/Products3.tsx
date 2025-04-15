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
  
  
];
function Products3() {
  return (
    <div className="productsSection mb-[40px]">
      <div className="container max-w-[1200px] px-[10px] mx-auto my-0 ">
      <div className="text-[35px] font-medium mb-[15px]">Mahsulotlar</div>
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

export default Products3;
