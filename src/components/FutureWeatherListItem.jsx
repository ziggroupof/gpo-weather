var React = require('react');


var tdStyle = {
  verticalAlign: "top",
  textAlign: "center"
};



var FutureWeatherListItem = React.createClass({
    render: function(){
        return (
            <div className="future-weather-item row">
              <div style={tdStyle} className="col-xs-4"><h5>{this.props.date}</h5></div>
              <div style={tdStyle} className="col-xs-4">
                {this.props.desc}
              </div>
              <div style={tdStyle} className="col-xs-4"><h5 className="">{Math.round(this.props.temp)}°C</h5></div>
            </div>
        );
    }
});

module.exports = FutureWeatherListItem;
