import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        let loading = {
            margin: "30vh auto",
            width: "min-content",
            height:"80vh",
        }
        let bigLoading = {
          fontSize: "20px",
          height: "100px",
          width: "100px",
        };
        return (
          <div style={loading}>
            <div class="spinner-border text-dark" style={bigLoading} role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        );
    }
}
