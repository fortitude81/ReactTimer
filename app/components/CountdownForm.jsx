var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {  //makes sure data is valid
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    console.log('input count', $('input').length); //ability to use jQuery

    if (strSeconds.match(/^[0-9]*$/)) {  //if it valid,
      this.refs.seconds.value = '';     //clear the field and
      this.props.onSetCountdown(parseInt(strSeconds, 10)); //then call parent function 'onSetCountdown'
    }                                                      //passed down from Countdown.jsx
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter Time In Seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
