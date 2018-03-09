import React, { Component } from 'react';
import { render } from 'react-dom';
import createReactClass from 'create-react-class';

class Label extends React.Component{
  constructor(props){
    super(props);
    this.className='plain-label';
  }
  render(){
     return <span className={this.className}>{this.props.children}</span>;
   }
};

class SuccessLabel extends Label {
  constructor(props){
    super(props);
    this.className = this.className + ' success-label';
  }
};

class SuccessLabelWithIcon extends Label {
  constructor(props){
    super(props);
    this.className = this.className + ' success-label';
  }
  render(){
    return <div>{super.render()}<span>&#9650;</span></div>;
  }
}

class ErrorLabel extends Label {
  constructor(props){
    super(props);
    this.className = this.className + ' error-label';
  }
}


export class Labels extends React.Component {
    render() {
      return <div>
      <Label> Plain Label </Label>
      <hr/>
      <SuccessLabel> Success Label </SuccessLabel>
      <hr/>
      <ErrorLabel> Error Label </ErrorLabel>  
      <hr/>
      <SuccessLabelWithIcon>Success Label with Icon </SuccessLabelWithIcon>
      </div>
    }

}