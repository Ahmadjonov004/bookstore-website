import {
  FaRegComment,
  FaRegHeart,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

interface ProductProps {
  image: string;
  name: string;
  size: string;
  type: string;
  label?: string;
  price: string;
  oldPrice?: string;
  discount: boolean;
  comments?: number;
}
function Product({
  image,
  name,
  size,
  type,
  label,
  price,
  discount,
  oldPrice,
  comments,
}: ProductProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] rounded-[6px] ">
      <div className="relative bg-[#EDEEF2] rounded-tl-[6px] rounded-tr-[6px]">
        {discount && <div className="discount">{discount}</div>}
        <img src={image} alt={name} />
        <FaRegHeart className="absolute right-[20px] top-[20px] text-[20px] text-red-700" />
      </div>
      <div className=" flex justify-between  p-[20px]">
        <div className=" ">
          <div className="flex-col ">
            <h4
              
              className="font-medium text-[18px]"
            >
              {name}
            </h4>
            <div className="flex justify-start items-center gap-5">
              <p className="text-[14px] font-normal text-[#9E9E9E]">{size}</p>
              <p className="text-[14px] font-normal text-[#9E9E9E]">{type}</p>
            </div>
            <p className="text-[10px] text-[#44E054] font-normal">{label}</p>
            <p className="text-[10px] text-[#9E9E9E] font-normal flex justify-end line-through">
              {oldPrice}
            </p>
            <p className="text-[25px] font-bold">{price}</p>  
          </div>
        </div>
        <div className="flex flex-col justify-between items-end ">
          <div className="flex-col items-end ">
            <div className="stars flex justify-start items-center gap-1">
              <FaStar className="text-[#EDCF5D] " />
              <FaStar className="text-[#EDCF5D] " />
              
              <FaStar className="text-[#EDCF5D] " />
              <FaStar className="text-[#EDCF5D] " />
              <FaStar className="text-[#EDCF5D] " />
            </div>
            <div className="text-[10px] font-normal  text-[#9E9E9E] flex items-center gap-[2px]  justify-end ">
              {comments} <FaRegComment className="text-[12px]" />
            </div>
          </div>
          <div className="p-[10px]  bg-[#141311] flex items-center justify-end  text-[24px] rounded-[8px] border hover:bg-white  text-white hover:text-black transition-all duration-300  " onClick={() => navigate(`/productDetail/${name}`)}>
            <FaShoppingBag className="  " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
