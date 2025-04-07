import { useState } from "react"
import Product from "./Product"


function Products() {
    const [productData, setProductData] = useState([{
        id: 1,
        name: "Product 1",
        price: 100,
        description: "Product 1 Description",
        image: "product1.jpg"
        
    }, {}, {}, {}, {}, ])
  return (
    <div>
      <h1>Mahsulotlar</h1>
        <div className="filterProduct"></div>
        {productData.map((product) => (
            <Product key={product.id}  />
        ))}
    </div>
  )
}

export default Products
