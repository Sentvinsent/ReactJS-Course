import { useParams, Link } from "react-router-dom"

export default function ProductDetails() {

    const params = useParams();

    return <>
        <h1>Test prod dedes</h1>
        <p>{params.productId}</p>
        <p><Link to=".." relative="path">Back</Link></p>
    </>
}