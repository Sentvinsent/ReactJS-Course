import { Link, useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products')
    }

    return (
        <>
            <h1>Test Home PAge</h1>
            <p>
                Go to <Link to="/products">products list</Link>
            </p>
            <button onClick={navigateHandler}>Navigate</button>
        </>
    )
}

export default HomePage