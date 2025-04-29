import Product from "./Product";
import FilterItems from "./FilterItems";

export const products = [
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
    image: "https://devel.prom.uz/upload/product_logos/b9/f5/b9f58e490b4c539aabfaf821612812b3.jpeg",
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

function Products() {
  return (
    <div className="productsSection mb-[40px]" id="kitoblar">
      <div className="container max-w-[1200px] px-[10px] mx-auto">
        <div className=" text-[25px] md:text-[35px] font-medium my-[10px]">Kitoblar</div>
        <FilterItems />
        <div className="products w-full grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] md:gap-[30px]">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
