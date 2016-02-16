var React = require('react');
var FutureWeatherListItem = require('./FutureWeatherListItem.jsx');

var FutureWeatherList = React.createClass({
  render: function(){
    var futureWeatherListItem = this.props.tempList.map(function(item, key) {
        // dig out the forecast for noon
        if (item.dt_txt.substring(11, 13) === "12") {
            return (
                <FutureWeatherListItem
                    key={key}
                    date={item.dt_txt}
                    temp={item.main.temp}
                    desc={item.weather[0].description}
                />
            );
        }
    });

    return (
        <div className="row future-weather-list">
          <div className="col-xs-12">
              {futureWeatherListItem}
          </div>
        </div>
    );
  }
});

module.exports = FutureWeatherList;
