import List from "../../List";
import "./McDonals.css";
import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { McDonalItems } from "./McDonalsItems";
export default function McDonals(props) {
  let [bag, setBag] = useState({
    item: 0,
    total: null,
  });
  function setBagInfo(total2) {
    setBag({ item: ++bag.item, total: bag.total+total2 });
  }
  function pay() {
    setBag({ item: 0, total:null});
  }
  let files = [
    {
      name: "Burger",
      icon: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-burger-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png",
      background: "lightsalmon",
    },
    {
      name: "FrenchFries",
      icon: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-french-fries-4th-july-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
      background: "lightcoral",
    },
    {
      name: "Beverage",
      icon: "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-coke-usa-flatart-icons-lineal-color-flatarticons.png",
      background: "plum",
    },
    {
      name: "Coffee",
      icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-coffee-autumn-season-justicon-lineal-color-justicon.png",
      background: "chocolate",
    },
  ];
  return (
    <div className="mcdonals">
      {files.map((item) => {
        return (
          <Route path={"/McDonals/" + item.name} exact={true} key={item.name}>
            <Header title={item.name} icon={item.icon} />
            <McDonalItems name={item.name} icon={item.icon} setBagInfo={setBagInfo} />
          </Route>
        );
      })}
      <Route path="/McDonals" exact={true}>
        <div className="menu">
          <Header title={props.projectName} icon={props.projectIcon} />
          <div className="menu-item-wrapper">
            {files.map((item) => {
              return (
                <Link to={"/McDonals/" + item.name} key={item.name}>
                  <List name={item.name} icon={item.icon} background={item.background} />
                </Link>
              );
            })}
          </div>
        </div>
      </Route>
      <Footer item={bag.item} total={bag.total} pay={pay} />
    </div>
  );
}
