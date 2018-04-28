import React from 'react';
import Results from './Results';
import renderer from 'react-test-renderer';
import serverResponse from '../../../../test/fixtures/server-response.js'

test('spinner render', () => {
  const tree = renderer
    .create(<Results fetchingInProgress={true} error={null} results={[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('error render', () => {
  const tree = renderer
    .create(<Results fetchingInProgress={false} error="Something went wrong." results={[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('results render', () => {
  const tree = renderer
    .create(<Results fetchingInProgress={false} error={null} results={serverResponse.Itineraries}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
