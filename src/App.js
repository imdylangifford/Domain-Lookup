import React, { Component } from "react";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Particles } from "react-particles-js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          className="canvas"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#000000",
                  blur: 1
                }
              }
            }
          }}
          style={{
            width: "100%"
          }}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
