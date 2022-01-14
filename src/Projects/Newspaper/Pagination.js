import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    var totalPage = Array.from(Array(this.props.totalPage).keys());
    return (
      <div>
        <nav>
          <ul className="pagination my-3">
            <li className="page-item">
              <button className="page-link btn" disabled={this.props.page === 1} onClick={() => this.props.pagination("p")}>
                Previous
              </button>
            </li>
            {totalPage.map((i) => {
              i = i + 1;
              return (
                <li key={i} className={`page-item ${this.props.page === i ? "active" : ""}`}>
                  <button className="page-link btn" disabled={this.props.page === i} onClick={() => this.props.pagination(i)}>
                    {i}
                  </button>
                </li>
              );
            })}
            <li className="page-item">
              <button className="page-link btn" disabled={this.props.page === this.props.totalPage} onClick={() => this.props.pagination("n")}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
