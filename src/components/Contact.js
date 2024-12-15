import React from "react";
import { Link } from "react-router-dom";

function Contact(props) {
  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/alex" className="ui header">
          Alex
        </Link>
        <p>Lorem</p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/willma" className="ui header">
          Willma
        </Link>
        <p>Lorem</p>
      </div>
    </div>
  );
}

export default Contact;
