import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator1: '',
      result: '0',
    };
    this.btnOnClickOperator = this.btnOnClickOperator.bind(this);
    this.btnOnClick = this.btnOnClick.bind(this);
    this.btnOnClickResult = this.btnOnClickResult.bind(this);
  }

  btnOnClickOperator({ target }) {
    this.setState((prevState) => ({
      operator1: prevState.operator1.concat(target.textContent),
      result: prevState.operator1.concat(target.textContent),
    }));
  }

  btnOnClick({ target }) {
    this.setState(() => ({
      operator1: target.textContent,
    }));
  }

  btnOnClickResult() {
    this.setState((prevState) => ({
      result: prevState.operator1 * 2,
    }));
  }

  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <div className="result">
          {result}
        </div>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-zero">0</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-dot">.</button>
        <button type="button" onClick={this.btnOnClickResult} className="btn-accent btn-equal">=</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-clear">AC</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-toogle-sign">+/-</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-percentage">%</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-divider">/</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-multiply">*</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-substract">-</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-plus">+</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-one">1</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-two">2</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-three">3</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-four">4</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-five">5</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-six">6</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-seven">7</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-eight">8</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-nine">9</button>
      </div>
    );
  }
}
