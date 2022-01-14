import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    let loading = {
      margin: `${this.props.margin}vh auto`,
      width: "min-content",
      
    };
    let bigLoading = {
      fontSize: "20px",
      height: "100px",
      width: "100px",
    };
    return (
      <div style={loading}>
        <div className="spinner-border text-warning" style={bigLoading} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
