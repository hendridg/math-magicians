import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  btnOnClick(buttonName) {
    this.setState((prevState) => (calculate(prevState, buttonName)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result">
          { total || '' }
          { operation || '' }
          { next || '' }
        </div>
        <Button typeBtn="0" btnOnClick={this.btnOnClick} btnClass="btn-light btn-zero" />
        <Button typeBtn="." btnOnclick={this.btnOnClick} btnClass="btn-light btn-dot" />
        <Button typeBtn="=" btnOnClick={this.btnOnClick} btnClass="btn-accent btn-equal" />
        <Button typeBtn="AC" btnOnClick={this.btnOnClick} btnClass="btn-light btn-clear" />
        <Button typeBtn="+/-" btnOnClick={this.btnOnClick} btnClass="btn-light btn-toogle-sign" />
        <Button typeBtn="%" btnOnClick={this.btnOnClick} btnClass="btn-light btn-percentage" />
        <Button typeBtn="/" btnOnClick={this.btnOnClick} btnClass="btn-accent btn-divider" />
        <Button typeBtn="x" btnOnClick={this.btnOnClick} btnClass="btn-accent btn-multiply" />
        <Button typeBtn="-" btnOnClick={this.btnOnClick} btnClass="btn-accent btn-substract" />
        <Button typeBtn="+" btnOnClick={this.btnOnClick} btnClass="btn-accent btn-plus" />
        <Button typeBtn="1" btnOnClick={this.btnOnClick} btnClass="btn-light btn-one" />
        <Button typeBtn="2" btnOnClick={this.btnOnClick} btnClass="btn-light btn-two" />
        <Button typeBtn="3" btnOnClick={this.btnOnClick} btnClass="btn-light btn-three" />
        <Button typeBtn="4" btnOnClick={this.btnOnClick} btnClass="btn-light btn-four" />
        <Button typeBtn="5" btnOnClick={this.btnOnClick} btnClass="btn-light btn-five" />
        <Button typeBtn="6" btnOnClick={this.btnOnClick} btnClass="btn-light btn-six" />
        <Button typeBtn="7" btnOnClick={this.btnOnClick} btnClass="btn-light btn-seven" />
        <Button typeBtn="8" btnOnClick={this.btnOnClick} btnClass="btn-light btn-eight" />
        <Button typeBtn="9" btnOnClick={this.btnOnClick} btnClass="btn-light btn-nine" />
      </div>
    );
  }
}
