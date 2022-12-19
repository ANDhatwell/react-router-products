import { Link } from "react-router-dom"



export const Product: FC<Product> = ({product}) => {
    const {name, price, id} = product
    return (<div className="product-card">
        <p><Link to={`products/${id}`}>{name}</Link></p>
        <p>{price}</p>       
    </div>)
}


