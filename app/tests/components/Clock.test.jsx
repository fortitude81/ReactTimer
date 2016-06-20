//load dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//load in Clock component
var Clock = require('Clock');

//write Test
describe('Clock', () => {
  it('should exist', () => {  //every test starts with 'it'
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      //convert to jQuery object
      var $el = $(ReactDOM.findDOMNode(clock)); //now have $el variable to make any jq call usally would
      var actualText = $el.find('.clock-text').text();  //use text method to pull text value out

      expect(actualText).toBe('01:02');  //assertion actual text toBe value of '62'
    });
  });


  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);  //render component
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);  //render component
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
