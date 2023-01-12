import CartIcon from "../cart/CarIcon";
import classes from "../layout/HeaderCartButton.module.css";

export const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>{CartIcon}</span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
