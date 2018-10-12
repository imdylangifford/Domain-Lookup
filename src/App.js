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
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#000"
              },
              shape: {
                type: "square",
                stroke: {
                  width: 5,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 8
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 10,
                  opacity_min: 0.1,
                  sync: false
                }
              },

              line_linked: {
                enable: true,
                distance: 200,
                color: "#000",
                opacity: 0.6,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
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
