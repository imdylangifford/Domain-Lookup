import React, { Component } from "react";
import Moment from "moment";
import "./Content.css";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "hi"
    };
  }
  render(props) {
    let formattedDate = Moment(this.props.data.createdDate).format(
      "MMMM Do YYYY"
    );
    let searches = this.props.searches.map((el, i) => {
      return <h2 key={i}>{el}</h2>;
    });
    if (this.props.data.administrativeContact) {
      return (
        <div className="contentcontainer">
          <div className="hellodiv">
            <div className="domain">
              <h1>Domain: {this.props.data.domainName}</h1>
            </div>
            <div className="info">
              <h2>
                ORGANIZATION:{" "}
                {this.props.data.administrativeContact.organization}
              </h2>
              <h2>DATE CREATED: {formattedDate}</h2>
              <h2>CITY: {this.props.data.administrativeContact.city}</h2>
              <h2>STATE: {this.props.data.administrativeContact.state}</h2>
              <h2>COUNTRY: {this.props.data.administrativeContact.country}</h2>
              <h2>PHONE: {this.props.data.administrativeContact.telephone}</h2>
            </div>
            <div />
          </div>
          <div className="goodbyediv">
            <h1>PREVIOUS SEARCHES</h1>
            <div>{searches}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="contentcontainer">
          <div className="placeholder">NO RESULTS</div>
          <div className="goodbyediv">
            <h1>PREVIOUS SEARCHES</h1>
            <div>{searches}</div>
          </div>
        </div>
      );
    }
  }
}
