import { Product } from "./Product"


export const ProductList = ({products}) => {
    return (<div>
        <h1>products</h1>

        <div className="container">
            {products.map(p => <Product key={p.id} product={p}/>)}
        </div>
    </div>)
}