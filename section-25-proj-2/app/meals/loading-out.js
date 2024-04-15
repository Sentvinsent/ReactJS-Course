import classes from "./loading.module.css";

export default function mealsLoading() {
  return <p className={classes.loading}>Fetching meals</p>;
}
