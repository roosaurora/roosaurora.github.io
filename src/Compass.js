import React from "react";
import "./App.css";
import compass from "./images/compass.png";
import TOC from "./TOC";

export default class Compass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.setState(() => {
      return { menuOpen: !this.state.menuOpen };
    });
  };

  render() {
    return (
      <div className="Compass-menu">
        <div className="Compass-horizontal-container left">
          <a
            className={
              this.state.menuOpen ? "Compass-link hidden" : "Compass-link"
            }
            href="#evaluate"
          >
            evaluating
          </a>
        </div>
        <div className="Compass-mobile-container left">
          <a className="Compass-link" href="#analyse">
            analysing
          </a>
          <a className="Compass-link" href="#ideate">
            ideating
          </a>
        </div>
        <div className="Compass-vertical-container">
        <a
            className={
              this.state.menuOpen ? "Compass-link hidden" : "Compass-link"
            }
            href="#analyse"
          >
            analysing
          </a>
          <img
            src={compass}
            alt="Compass"
            onClick={() => this.handleChange()}
          ></img>
          <a
            className={
              this.state.menuOpen ? "Compass-link hidden" : "Compass-link"
            }
            href="#build"
          >
            building
          </a>
        </div>
        <div className="Compass-horizontal-container right">
          <a
            className={
              this.state.menuOpen ? "Compass-link hidden" : "Compass-link"
            }
            href="#ideate"
          >
            ideating
          </a>
        </div>
        <div className="Compass-mobile-container right">
          <a className="Compass-link" href="#build">
            building
          </a>
          <a className="Compass-link" href="#evaluate">
            evaluating
          </a>
        </div>
      </div>
    );
  }
}
