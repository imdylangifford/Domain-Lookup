import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <h1>WHOIS LOOKUP</h1>
      <h2>GET INFORMATION ON ANY DOMAIN</h2>
      <Link to="/main">
        <p className="getstarted">GET STARTED</p>
      </Link>
    </div>
  );
}
