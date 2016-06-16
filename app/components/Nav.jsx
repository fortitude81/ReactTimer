var React = require('react');
var {Link, IndexLink} = require('react-router');  //react router, using es6 destructuring

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
          <img id="butters" src={"https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png"}/>
          </li>
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.justinbennett.co" target="_blank">Justin Bennett</a>
          </li>
        </ul>
      </div>

    </div>
  )
};

module.exports = Nav;
