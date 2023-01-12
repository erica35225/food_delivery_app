import { Fragment } from "react";
import classes from "../Ui/Modal.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById('overlays');
export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElements)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </Fragment>
  );
};
