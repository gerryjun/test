import React, { Component } from 'react';

export class Counter extends React.Component {

   constructor(props) {
    super(props);
    this.state = {count: 0 };
    this.onClick = this.onClick.bind(this); // do bind current object
  }

  onClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <button onClick={this.onClick}>click!</button>
      </div>
    );
  }

};