import classes from "../Ui/Input.module.css";
export const Input = (props) => {

  return (
    <div className={classes.input}>
      <label htmlFor={props.inputValues.id}>{props.label}</label>
      <input {...props.inputValues}></input>
    </div>
  );
};
