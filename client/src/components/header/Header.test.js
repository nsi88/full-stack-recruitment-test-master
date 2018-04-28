import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';

test('render', () => {
  const tree = renderer.create(<Header fromPlace="EDI" toPlace="LON" adults="2" cabinClass="Economy"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
