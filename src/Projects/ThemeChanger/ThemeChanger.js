import React, { useState } from "react";
import About from "./About";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function ThemeChanger() {
    let center={
        display: "grid",
        placeContent: "center",
        minHeight:"90vh"
    }
    
    const [bg, setbg] = useState("dark")
    const [color, setColor] = useState("light");
    const changeTheme = (bg, color) => {
        setbg(bg);
        setColor(color);
    }
  return (
    <div>
      <Router>
        <Navbar bg={bg} color={color} changeTheme={changeTheme} />
        <div style={center} className={`text-${color} border border-${color} bg-${bg}`}>
          <Switch>
            <Route exact path="/ThemeChanger">
              <div>
                <h1>Home page</h1>
              </div>
            </Route>
            <Route exact path="/ThemeChanger/about">
              <About bg={bg} color={color} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default ThemeChanger;
