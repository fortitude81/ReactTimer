var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
          case 'stopped':  //set new state to stopped, reset count and clear timer
            this.setState({count: 0});
          case 'paused':
            clearInterval(this.timer) //leave counter whereever it was, clear timer
            this.timer = undefined;
            break;
      }
    }
  },
  componentWillUnmount: function() {  //lifesycle method, automatically fired by React right before component gets removed form the DOM (visually removed from browser)
    console.log('componentDidUnmount');
    clearInterval(this.timer);  //stop interval
    this.timer=undefined;  //cleanup variable
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});  //cancel interval when reaches 0, since sets state = stopped will also show countdown form again, then can pick a new #
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {  //when user submits
    this.setState({                         //updates state to whatever they typed in 'seconds'
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };
    return (  //here define what is should look like in the child then define which function to call on current class when child calls that function 'handleSetCountdown'^
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
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
