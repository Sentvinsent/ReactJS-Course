import mealsImg from "../../assets/meals.jpg"
import classes from "../Layout/Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImg} alt="Table full of food" />
            </div>
        </>
    )
}

export default Header