import classes from "../Ui/Card.module.css";
export const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
