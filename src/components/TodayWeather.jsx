var React = require('react');

var headerStyle = {
  padding:15
};

var TodayWeather = React.createClass({
  render: function(){
    return(
      <div id="today-weather-box" className="row"  style={headerStyle}>

          <h5>{this.props.city}, {this.props.country}</h5>
          <h6>{Math.round(this.props.temp)}°C</h6>
          <p>{this.props.description}</p>

      </div>

    );
  }
});

module.exports = TodayWeather;
