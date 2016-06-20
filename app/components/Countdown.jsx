var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129}/>
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
