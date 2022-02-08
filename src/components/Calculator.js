import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

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

  btnOnClick({ target }) {
    this.setState((prevState) => (calculate(prevState, target.textContent)));
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
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-zero">0</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-dot">.</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-equal">=</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-clear">AC</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-toogle-sign">+/-</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-percentage">%</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-divider">/</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-multiply">x</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-substract">-</button>
        <button type="button" onClick={this.btnOnClick} className="btn-accent btn-plus">+</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-one">1</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-two">2</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-three">3</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-four">4</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-five">5</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-six">6</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-seven">7</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-eight">8</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-nine">9</button>
      </div>
    );
  }
}
