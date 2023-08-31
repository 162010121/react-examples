import React, { Component } from 'react'
export default class Discplay extends Component {
  render() {
    return (
      <div >
        <center>
        <h6>{this.props.name}</h6>
        </center>
      </div>
    )
  }
}
