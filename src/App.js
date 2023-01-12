import React, { Fragment } from "react";
import "./App.css";
import { Header } from "./Component/layout/Header";
import { Meals } from "./Component/meals/Meals";
import { Cart } from "./Component/cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
