import React, { Fragment } from "react";
import classes from '../layout/Header.module.css'
import mealsImage from '../assets/meals.jpg';
import { HeaderCartButton } from "./HeaderCartButton";
export const Header = () => {
  return (
    <Fragment>
      <header className = {classes.header}>
        <h1>Granny's Kitchen</h1>
        <HeaderCartButton/>
      </header>
      <div className = {classes['main-image']}>
        <img src= {mealsImage}></img>
      </div>
    </Fragment>
  );
};
