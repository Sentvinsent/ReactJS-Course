import { Link } from "react-router-dom"

const PRODUCS = [
    { id: 'p1', title: "Prod 1" },
    { id: 'p2', title: "Prod 2" },
    { id: 'p3', title: "Prod 3" }
]

function ProductsPage() {
    return (
        <>
            <h1>Test Products PAge</h1>
            <ul>
                {PRODUCS.map(prod => <li key={prod.id}><Link to={`/products/${prod.id}`}>{prod.title}</Link></li>)}
            </ul>
        </>
    )
}

export default ProductsPage