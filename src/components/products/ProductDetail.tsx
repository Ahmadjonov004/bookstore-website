import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ProductProps {
  id: number;
  image?: string;
  name?: string;
  size?: string;
  type?: string;
  label?: string;
  labelColor?: string;
  price?: string;
  oldPrice?: string;
  discount?: boolean;
  comments?: number;
}

const products: ProductProps[] = [
  {
    id: 1,
    image: "https://images.uzum.uz/cm075jb2psag1e8tv700/original.jpg",
    name: "Alkimyogar",
    type: "Qattiq muqova",
    label: "Badiiy adabiyot",
    price: "80 000 so‘m",
    oldPrice: "100 000 so‘m",
    discount: true,
    comments: 52,
  },
  {
    id: 2,
    image:
      "https://devel.prom.uz/upload/product_logos/b9/f5/b9f58e490b4c539aabfaf821612812b3.jpeg",
    name: "O'tkan kunlar",
    type: "Qattiq muqova",
    label: "O‘zbek adabiyoti",
    price: "65 000 so‘m",
    oldPrice: "85 000 so‘m",
    discount: true,
    comments: 45,
  },
  {
    id: 3,
    image: "https://images.uzum.uz/cm4pfo3ifoubkc6m64sg/original.jpg",
    name: "1984",
    type: "Qattiq muqova",
    label: "Dunyoviy adabiyot",
    price: "90 000 so‘m",
    oldPrice: "120 000 so‘m",
    discount: true,
    comments: 38,
  },
  {
    id: 4,
    image: "https://images.uzum.uz/ct9jf27iub3d1eokqdeg/original.jpg",
    name: "Boy ota",
    type: "Yumshoq muqova",
    label: "Biznes va Moliyaviy bilim",
    price: "30 000 so‘m",
    oldPrice: "38 000 so‘m",
    discount: true,
    comments: 40,
  },
  {
    id: 5,
    image: "https://images.uzum.uz/cqgfffsqvsse8let2r7g/original.jpg",
    name: "Pul psixalogiyasi",
    type: "Yumshoq muqova",
    label: "Ilmiy ",
    price: "75 000 so‘m",
    oldPrice: "95 000 so‘m",
    discount: true,
    comments: 25,
  },
  {
    id: 6,
    image: "https://images.uzum.uz/cu3m3345j42bjc48dfqg/original.jpg",
    name: "Diqqat",
    type: "Yumshoq muqova",
    label: "Ommabop ilm-fan",
    price: "40 000 so‘m",
    oldPrice: "55 000 so‘m",
    discount: true,
    comments: 32,
  },
  {
    id: 7,
    image: "https://images.uzum.uz/cuj2vo6i4n324lr8r5ug/original.jpg",
    name: "Think and Grow",
    type: "Qattiq muqova",
    label: "Biznes va Motivatsiya",
    price: "37 000 so‘m",
    oldPrice: "99 000 so‘m",
    discount: true,
    comments: 60,
  },
  {
    id: 8,
    image: "https://images.uzum.uz/cui4cvc5j42bjc4ckkk0/original.jpg",
    name: "Atomic Habits",
    type: "Qattiq muqova",
    label: "O'zini rivojlantirish",
    price: "105 000 so‘m",
    oldPrice: "135 000 so‘m",
    discount: true,
    comments: 48,
  },
  {
    id: 9,
    image: "https://images.uzum.uz/cuqq6k5pb7f8r31vkn5g/original.jpg",
    name: "Deep Work",
    type: "Qattiq muqova",
    label: "Diqqat va samaradorlik",
    price: "85 000 so‘m",
    oldPrice: "115 000 so‘m",
    discount: true,
    comments: 36,
  },
  {
    id: 10,
    image: "https://images.uzum.uz/cu4jvps5j42bjc48mml0/original.jpg",
    name: "Men",
    type: "Qattiq muqova",
    label: "Moliyaviy bilim",
    price: "110 000 so‘m",
    oldPrice: "140 000 so‘m",
    discount: true,
    comments: 55,
  },
];

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setProduct(found || null);
    const loggedIn = localStorage.getItem("token");
    setIsLoggedIn(!!loggedIn);
  }, [id]);

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      navigate("/register");
    } else {
      toast.success("Buyurtmangiz rasmiylashtirildi ✅");
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-2xl font-medium text-gray-600 animate-pulse">
          Mahsulot topilmadi 😢
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4">
        <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-base text-gray-500 mb-6">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-gray-900 transition-colors duration-200"
            >
              Bosh sahifa
            </span>
            <span className="text-gray-400">/</span>
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-gray-900 transition-colors duration-200"
            >
              Kitoblar
            </span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </div>


          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-2 md:gap-8 lg:gap-12 mt-[10px]">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[180px] md:max-w-[350px] h-auto rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Details */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center ">
              {/* Title and Reviews */}
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                <p className="mt-2 text-[12px] sm:text-base text-gray-600 flex items-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span>({product.comments} ta sharh)</span>
                </p>
              </div>

              {/* Book Info */}
              <div className="space-y-3 text-gray-700 text-[12px]">
                <p>
                  <span className="font-medium">Muqova:</span>{" "}
                  {product.type || "Noma'lum"}
                </p>
                <p>
                  <span className="font-medium">Kategoriya:</span>{" "}
                  {product.label || "Noma'lum"}
                </p>
                <p>
                  <span className="font-medium">Sahifalar:</span>{" "}
                  {product.size || "Noma'lum"}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-2xl sm:text-4xl font-bold text-green-600">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-lg sm:text-xl text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <p className="text-gray-700 font-medium">Miqdor:</p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-1 md:py-2  text-lg text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
                  >
                    −
                  </button>
                  <span className="px-4 py-1 md:py-2  text-gray-900 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-1 md:py-2  text-lg text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4 mt-2">
                <button className=" w-full sm:w-auto bg-gray-800 text-sm md:text-base text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 active:bg-gray-950 transform active:scale-95 transition-all duration-200">
                  Savatga qo‘shish
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full sm:w-auto bg-green-600 text-sm md:text-base text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 active:bg-green-800 transform active:scale-95 transition-all duration-200"
                >
                  Hozir xarid qilish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductDetail;
