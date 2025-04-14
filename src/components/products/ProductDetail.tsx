
import {products} from './Products'
import { useParams } from 'react-router-dom'
function ProductDetail() {
    const {name} = useParams()
    const productResult = products.find(product => product.name === name)
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail