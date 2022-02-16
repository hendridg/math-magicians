import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Button
        typeBtn="AC"
        btnOnClick={() => {}}
        primary
        btnClass="btn-clear"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
