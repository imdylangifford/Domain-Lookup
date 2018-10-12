import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
      </div>
    );
  }
}
