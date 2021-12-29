import React, { Component } from "react";

class Teams extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Teams;
