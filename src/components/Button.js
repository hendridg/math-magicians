import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: none;
  background: ${(props) => (props.primary ? '#e0e0e0' : '#f5913e')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Button extends Component {
  constructor(props) {
    super(props);
    const { typeBtn, btnClass, primary } = this.props;
    this.state = {
      nameBtn: typeBtn,
      btnClass,
      primary,
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  btnOnClick(nameButton) {
    const { btnOnClick } = this.props;
    btnOnClick(nameButton);
  }

  render() {
    const { nameBtn, btnClass, primary } = this.state;
    return <Btn primary={primary} type="button" className={btnClass} onClick={() => this.btnOnClick(nameBtn)}>{ nameBtn }</Btn>;
  }
}

Button.propTypes = {
  typeBtn: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  btnOnClick: PropTypes.func,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  btnClass: 'btn-light',
  primary: false,
  btnOnClick: () => {},
};
