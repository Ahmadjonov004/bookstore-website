import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import bookCover from '../../assets/images/doors.png'; // vaqtincha kitob rasmi sifatida
// Agar asl kitob rasmlari bo'lsa, albatta o'shani ulab olasiz

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
    image: "/images/door1.png",
    name: "“Alkimyogar” — Paulo Coelho",
    size: "Roman, 190 sahifa",
    type: "Badiiy adabiyot",
    label: "Bestseller",
    labelColor: "text-green-600",
    price: "90 000 so‘m",
    oldPrice: "120 000 so‘m",
    discount: true,
    comments: 40,
  },
  {
    id: 2,
    image: "/images/door1.png",
    name: "“Boy ota, Qashshoq ota” — Robert Kiyosaki",
    size: "Motivatsiya, 280 sahifa",
    type: "Biznes adabiyot",
    label: "Moliyaviy erkinlik",
    labelColor: "text-green-500",
    price: "120 000 so‘m",
    comments: 40,
  },
  {
    id: 3,
    image: "/images/door1.png",
    name: "“Saboqlar kitobi” — Abdulla Qahhor",
    size: "She'riy to‘plam, 150 sahifa",
    type: "Badiiy adabiyot",
    label: "Adabiy meros",
    labelColor: "text-green-600",
    price: "85 000 so‘m",
    oldPrice: "110 000 so‘m",
    discount: true,
    comments: 30,
  },
  {
    id: 4,
    image: "/images/door1.png",
    name: "“O‘tgan kunlar” — Abdulla Qodiriy",
    size: "Roman, 320 sahifa",
    type: "Badiiy adabiyot",
    label: "O‘zbek adabiyoti",
    labelColor: "text-green-500",
    price: "100 000 so‘m",
    comments: 35,
  },
  {
    id: 5,
    image: "/images/door1.png",
    name: "“Sehrli ertaklar” — Bolalar uchun",
    size: "Bolalar adabiyoti, 100 sahifa",
    type: "Bolalar uchun",
    label: "Bolalar",
    labelColor: "text-green-600",
    price: "70 000 so‘m",
    oldPrice: "90 000 so‘m",
    discount: true,
    comments: 28,
  },
  {
    id: 6,
    image: "/images/door1.png",
    name: "“Think and Grow Rich” — Napoleon Hill",
    size: "Motivatsiya, 250 sahifa",
    type: "Biznes adabiyot",
    label: "Bestseller",
    labelColor: "text-green-500",
    price: "130 000 so‘m",
    discount: true,
    comments: 50,
  },
];

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const result = products.find((item) => item.id === Number(id));
    setProduct(result || null);
  }, [id]);

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap text-sm sm:text-base gap-1 mb-8">
        <p onClick={() => navigate('/')} className="cursor-pointer text-gray-500 hover:text-black">
          Bosh sahifa •
        </p>
        <p onClick={() => navigate('/')} className="cursor-pointer text-gray-500 hover:text-black">
          Kitoblar •
        </p>
        <p className="text-gray-700">
          {product?.name}
        </p>
      </div>

      {/* Product Info */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={product?.image || bookCover}
            alt={product?.name}
            className="w-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
              {product?.name}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              ⭐⭐⭐⭐⭐ ({product?.comments} ta sharh)
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-gray-900">
              {product?.price}
            </h2>
            {product?.oldPrice && (
              <span className="text-xl line-through text-gray-400">
                {product.oldPrice}
              </span>
            )}
          </div>

          {/* Book Details */}
          <div>
            <p className="text-gray-600 mb-2">Kitob turi:</p>
            <span className="inline-block py-1 px-3 rounded-md bg-gray-800 text-white text-sm">
              {product?.type}
            </span>
          </div>

          <div>
            <p className="text-gray-600 mb-2">Sahifalar soni:</p>
            <p className="text-gray-700">{product?.size}</p>
          </div>

          <div>
            <p className="text-gray-600 mb-2">Kategoriya:</p>
            <span className={`inline-block py-1 px-3 rounded-md ${product?.labelColor}`}>
              {product?.label}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="w-full sm:w-auto bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition">
              Savatga qo‘shish
            </button>
            <button className="w-full sm:w-auto bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition">
              Hozir xarid qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
