import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productdetail from '../../assets/images/doors.png'
interface Productproms {
    id: number
    image?: string
    name?: string
    size?: string
    type?: string
    label?: string
    labelColor?: string
    price?: string
    oldPrice?: string
    discount?: boolean
    comments?: number
}
const products = [
    {
        id: 1,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "MDF",
        labelColor: "text-green-600",
        price: "1 000 000 so‘m",
        oldPrice: "1 200 000 so‘m",
        discount: true,
        comments: 40,
    },
    {
        id: 2,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "AKFA",
        labelColor: "text-green-500",
        price: "1 200 000 so‘m",
        comments: 40,
    },
    {
        id: 3,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "MDF",
        labelColor: "text-green-600",
        price: "1 050 000 so‘m",
        oldPrice: "1 300 000 so‘m",
        discount: true,
        comments: 30,
    },
    {
        id: 4,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "AKFA",
        labelColor: "text-green-500",
        price: "1 150 000 so‘m",
        comments: 35,
    },
    {
        id: 5,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "MDF",
        labelColor: "text-green-600",
        price: "900 000 so‘m",
        oldPrice: "1 100 000 so‘m",
        discount: true,
        comments: 28,
    },
    {
        id: 6,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "AKFA",
        discount: true,
        labelColor: "text-green-500",
        price: "1 300 000 so‘m",
        comments: 50,
    },
]
function ProductDetail() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState<Productproms | null>(null)
    useEffect(() => {
        const resalt = products.find(prev => prev.id === Number(id))
        setProduct(resalt || null)
    })
    return (
        <div>
            
            <div className="container max-w-7xl mx-auto px-3 sm:px-5 md:px-10 mb-20">
                <div className="flex flex-wrap gap-1 text-sm sm:text-base">
                    <p onClick={() => navigate('/')} className="cursor-pointer text-[#6D6D6D] hover:text-dark">Bosh sahifa • </p>
                    <p onClick={() => navigate('/')} className="cursor-pointer text-[#6D6D6D] hover:text-dark">Eshiklar • </p>
                    <p onClick={() => navigate('/')} className="cursor-pointer text-[#6D6D6D] hover:text-dark">
                        {product?.name} • {product?.type} {product?.label} eshik
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mt-5">
                    <div className="w-full lg:w-1/2">
                        <img src={productdetail} alt={product?.name} className="w-full object-cover rounded-md" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-5">
                        <div>
                            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-medium text-[#141311]">
                                {product?.name}
                            </h3>
                            <p className="text-[13px] sm:text-[14px] text-[#9E9E9E]">
                                ⭐⭐⭐⭐⭐ {product?.comments} komment
                            </p>
                        </div>
                        <h1 className="text-[30px] sm:text-[40px] md:text-[45px] font-bold text-[#141311]">
                            {product?.price}
                        </h1>
                        <div>
                            <p className="text-[16px] text-[#606060] mb-2">Rang</p>
                            <div className="flex gap-3">
                                <div className="cursor-pointer w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border border-[#5A5A5A] rounded-lg bg-[#5D412A]"></div>
                                <div className="cursor-pointer w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border border-[#5A5A5A] rounded-lg bg-[#E3B90F]"></div>
                                <div className="cursor-pointer w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border border-[#5A5A5A] rounded-lg bg-[#FFFFFF]"></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#606060] mb-2">O'lchamlar</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {["120x200 sm", "130x200 sm", "120x200 sm", "120x200 sm", "120x200 sm", "120x200 sm"].map((size, index) => (
                                    <p
                                        key={index}
                                        className="py-2 px-3 border flex items-center justify-center text-[14px] sm:text-[16px] rounded-md hover:bg-[#444444] hover:text-white cursor-pointer text-[#494949] border-[#BEBEBE]"
                                    >
                                        {size}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#606060] mb-1">Brendlar</p>
                            <span className="inline-block py-1 px-3 rounded-md bg-[#444444] text-[16px] text-white">
                                {product?.label}
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button className="w-full sm:w-auto py-4 px-6 text-[18px] text-white bg-[#444444] rounded-lg">
                                Savatga qo‘shish
                            </button>
                            <button className="w-full sm:w-auto py-4 px-6 text-[18px] text-white bg-[#141311] rounded-lg">
                                Sotib olish
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default ProductDetail