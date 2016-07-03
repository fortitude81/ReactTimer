var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {  //add state to Countdown component
    return {                       //currently maintains one field 'count', starts at 0
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {  //gets called everytime state or props updated
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
          case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds) {  //when user submits
    this.setState({                         //updates state to whatever they typed in 'seconds'
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render: function () {
    var {count} = this.state;

    return (  //here define what is should look like in the child then define which function to call on current class when child calls that function 'handleSetCountdown'^
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});
// var Countdown = (props) => {
//   return (
//     <div>
//       <p>
//         countdown man
//       </p>
//     </div>
//   )
// }

module.exports = Countdown;
