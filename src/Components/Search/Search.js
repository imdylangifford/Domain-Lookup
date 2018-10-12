import React, { Component } from "react";
import Content from "../Content/Content";
import axios from "axios";
import "./Search.css";
export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      results: [],
      allSearches: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  getData(str) {
    axios
      .get(
        `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_UOkUU3ntkIoFujQ4Sn2ayHp61vXUU&domainName=${
          this.state.search
        }&outputFormat=json`
      )
      .then(
        this.setState({
          allSearches: [this.state.search, ...this.state.allSearches]
        })
      )
      .then(response =>
        this.setState({
          search: "",
          results: response.data.WhoisRecord
        })
      );
  }
  render() {
    return (
      <div>
        <div className="searchcontainer">
          <input
            value={this.state.search}
            onChange={this.handleChange}
            className="searchinput"
            type="text"
            placeholder="ENTER DOMAIN NAME"
          />
          <button onClick={this.getData} className="searchbutton">
            Submit
          </button>
        </div>
        <Content data={this.state.results} searches={this.state.allSearches} />
      </div>
    );
  }
}
