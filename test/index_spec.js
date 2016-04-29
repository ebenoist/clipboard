const ReactDOM = require('react-dom');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const ClipboardInput = require('../lib/index.jsx');

describe('<ClipboardInput>', function() {
  it('renders', function() {
    const component = TestUtils.renderIntoDocument(
      <ClipboardInput />
    );

    const dom = ReactDOM.findDOMNode(component);
  });
});

