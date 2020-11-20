import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PageContent extends React.Component {
 
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); 
}
 
// scrollToMyRef = window.scrollTo(0, this.myRef.current.offsetTop) 
 
  render() {
    return (
        <div className="Content-wrapper" id={this.props.id}>
          <h2 className="First">{this.props.title}</h2>
          {this.props.content}
        </div>
    );
  }
}
