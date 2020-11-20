import React from "react";
import "./App.css";

export default class ContentParallax extends React.Component {
  render() {
    return (
      <div className={"Content-parallax " + this.props.name}>
        <div className="Content-text">
          <h1 className="Scratch-title Hidden-text">{this.props.scratch}</h1>
          <h1 className="Fixed-text">{this.props.fixed}</h1>
        </div>
      </div>
    );
  }
}
