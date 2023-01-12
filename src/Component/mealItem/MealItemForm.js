import { Input } from "../Ui/Input";
import classes from "../mealItem/MealItemForm.module.css";
export const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        inputValues={{
          id: "amount",
          max: "5",
          min: "1",
          type: "number",
          step: "1",
          defaultValue: "1",
        }} 
      />
      <button>+ Add</button>
    </form>
  );
};
