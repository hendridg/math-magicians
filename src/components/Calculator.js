import React, { useState, useEffect } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [objState, setObjState] = useState({});

  useEffect(() => {
    setObjState({
      total: '0',
      next: null,
      operation: null,
    });
  }, []);

  const btnOnClick = (buttonName) => {
    setObjState(calculate(objState, buttonName));
  };

  return (
    <div className="container">
      <div className="result">
        { objState.total || '' }
        { objState.operation || '' }
        { objState.next || '' }
      </div>
      <Button typeBtn="0" btnOnClick={btnOnClick} btnClass="btn-light btn-zero" />
      <Button typeBtn="." btnOnclick={btnOnClick} btnClass="btn-light btn-dot" />
      <Button typeBtn="=" btnOnClick={btnOnClick} btnClass="btn-accent btn-equal" />
      <Button typeBtn="AC" btnOnClick={btnOnClick} btnClass="btn-light btn-clear" />
      <Button typeBtn="+/-" btnOnClick={btnOnClick} btnClass="btn-light btn-toogle-sign" />
      <Button typeBtn="%" btnOnClick={btnOnClick} btnClass="btn-light btn-percentage" />
      <Button typeBtn="/" btnOnClick={btnOnClick} btnClass="btn-accent btn-divider" />
      <Button typeBtn="x" btnOnClick={btnOnClick} btnClass="btn-accent btn-multiply" />
      <Button typeBtn="-" btnOnClick={btnOnClick} btnClass="btn-accent btn-substract" />
      <Button typeBtn="+" btnOnClick={btnOnClick} btnClass="btn-accent btn-plus" />
      <Button typeBtn="1" btnOnClick={btnOnClick} btnClass="btn-light btn-one" />
      <Button typeBtn="2" btnOnClick={btnOnClick} btnClass="btn-light btn-two" />
      <Button typeBtn="3" btnOnClick={btnOnClick} btnClass="btn-light btn-three" />
      <Button typeBtn="4" btnOnClick={btnOnClick} btnClass="btn-light btn-four" />
      <Button typeBtn="5" btnOnClick={btnOnClick} btnClass="btn-light btn-five" />
      <Button typeBtn="6" btnOnClick={btnOnClick} btnClass="btn-light btn-six" />
      <Button typeBtn="7" btnOnClick={btnOnClick} btnClass="btn-light btn-seven" />
      <Button typeBtn="8" btnOnClick={btnOnClick} btnClass="btn-light btn-eight" />
      <Button typeBtn="9" btnOnClick={btnOnClick} btnClass="btn-light btn-nine" />
    </div>
  );
};

export default Calculator;
