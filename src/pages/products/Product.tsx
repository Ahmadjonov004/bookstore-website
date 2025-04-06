// export interface Product {
//     id: string;
//     title: string;
//     size: string;
//     quantity: string;
//     material: string;
//     price: number;
//     oldPrice?: number;
//     imageUrls: string[];
//     rating: number;
//     reviewCount: number;
//     isDiscount: boolean;
//     isFavorite?: boolean;
//   }
  
//   export const product: Product = {
//     id: "1",
//     title: "MDF Eshiklar",
//     size: "120x200 sm",
//     quantity: "1 qanotli",
//     material: "MDF",
//     price: 1000000,
//     oldPrice: 1200000,
//     imageUrls: [
//       "/images/door1.png",
//       "/images/door2.png"
//     ],
//     rating: 5,
//     reviewCount: 43,
//     isDiscount: true,
//     isFavorite: false,
//   };
  
//   export default product;
  
interface Product {
      id: string;
      name: string;
      title: string;
      size: string;
      quantity: string;
      material: string;
      price: number;
      oldPrice?: number;
      imageUrls: string[];
      rating: number;
      reviewCount: number;
      isDiscount: boolean;
      isFavorite?: boolean;
    }
function Product() {
  return (
    <div>
        {/* Product component */}
        <Product 
          id="1"
          title="MDF Eshiklar"
          size="120x200 sm"
          quantity="1 qanotli"
          material="MDF"
          price={1000000}
          oldPrice={1200000}
          imageUrls={["/images/door1.png", "/images/door2.png"]}
          rating={5}
          reviewCount={43}
          isDiscount={true}
          isFavorite={false}
        />
    </div>
  )
}

export default Product