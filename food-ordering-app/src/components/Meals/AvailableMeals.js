import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import useRequest from "../../hooks/use-request";
import { useEffect, useState } from "react";

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest } = useRequest();

    useEffect(() => {
        sendRequest({ "url": "https://react-course-proj-e9722-default-rtdb.firebaseio.com/Meals.json" }, setMeals)
    }, [sendRequest])

    const mealsList = meals.map((meal) => {
        return <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    })

    let content =
        <ul>
            {mealsList}
        </ul>;

    if (error) {
        content =
            <div className={classes.fetchErrorContainer}>
                <p>Failed to get the meals list</p>
                <button onClick={sendRequest} className={classes.fetchButton}>Try again</button>
            </div>
    }

    if (isLoading) {
        content = <p className={classes.mealsLoading}>Loading tasks...</p>
    }

    return (
        <section className={classes.meals}>
            <Card>
                {content}
            </Card>
        </section>
    )
}

export default AvailableMeals