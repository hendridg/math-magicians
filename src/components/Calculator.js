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
    const { total, next, operation } = calculate(objState, buttonName);
    setObjState({ total, next, operation });
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '56rem',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: 'darkGray', margin: '0' }}>Lets do some Math</h1>
      <div className="container">
        <div className="result" data-testid="result-id">
          {objState.total || ''}
          {objState.operation || ''}
          {objState.next || ''}
        </div>
        <Button
          typeBtn="0"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-zero"
        />
        <Button typeBtn="=" btnOnClick={btnOnClick} btnClass="btn-equal" />
        <Button
          typeBtn="AC"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-clear"
        />
        <Button
          typeBtn="+/-"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-toogle-sign"
        />
        <Button
          typeBtn="%"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-percentage"
        />
        <Button typeBtn="/" btnOnClick={btnOnClick} btnClass="btn-divider" />
        <Button typeBtn="x" btnOnClick={btnOnClick} btnClass="btn-multiply" />
        <Button typeBtn="-" btnOnClick={btnOnClick} btnClass="btn-substract" />
        <Button typeBtn="+" btnOnClick={btnOnClick} btnClass="btn-plus" />
        <Button
          typeBtn="1"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-one"
        />
        <Button
          typeBtn="2"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-two"
        />
        <Button
          typeBtn="3"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-three"
        />
        <Button
          typeBtn="4"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-four"
        />
        <Button
          typeBtn="5"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-five"
        />
        <Button
          typeBtn="6"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-six"
        />
        <Button
          typeBtn="7"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-seven"
        />
        <Button
          typeBtn="8"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-eight"
        />
        <Button
          typeBtn="9"
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-nine"
        />
        <Button
          typeBtn="."
          btnOnClick={btnOnClick}
          primary
          btnClass="btn-dot"
        />
      </div>
    </div>
  );
};

export default Calculator;
