import { useParams } from "react-router-dom";
import { productData } from "../products";

export const ProductPage = () => {
    let { productId } = useParams();

    const product = productData.products.find(p=> p.id === productId)

    return (<div className="product-page">

            {Object.entries(product).map((data, index) => {
                const [key, value]= data
                return (< p key={`${product.id}${index}`}> {key}: {value}</p>)
            })}
    </div>)
    }