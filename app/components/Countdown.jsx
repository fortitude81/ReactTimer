var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {  //add state to Countdown component
    return {count: 0};            //currently maintains one field 'count', starts at 0
  },
  handleSetCountdown: function (seconds) {  //when user submits
    this.setState({                         //updates state to whatever they typed in 'seconds'
      count: seconds
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
