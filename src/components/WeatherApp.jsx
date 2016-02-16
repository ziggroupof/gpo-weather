var React = require('react');
var HTTP = require('../services/httpservice');

var TodayWeather = require('./TodayWeather.jsx');
var FutureWeatherList = require('./FutureWeatherList.jsx');
var SearchBox = require('./SearchBox.jsx');

var boxstyle = {
  marginTop:15,
  background:"MediumTurquoise",
  color:"#fff"
};

var headstyle = {
  background:"LightSeaGreen"
};

var WeatherApp = React.createClass({
  getInitialState: function() {
    return (
      {
        search: "",
        weather: []
      }
    )
  },
  componentWillMount: function() {
    HTTP.get('?q=Manchester,gb&units=metric&APPID=00b820f2292a5a0af564266633356435')
    .then(function(data){
      this.setState({weather: [data]});
      console.log(data);
    }.bind(this));
  },

  //This function gets called when the form in the SearchBox is submited.
    handleSearch: function(search){
      //Sends an request to OpenWeatherAPI with the input of the user
      HTTP.get('?q='+ search + '&units=metric&APPID=00b820f2292a5a0af564266633356435')
      .then(function(data){
        //Sets the data returned to the state of the component
        this.setState({ search: search, weather: [data]});
      }.bind(this));
    },


  render: function() {
    var todayWeather = this.state.weather.map(function(item, key){
      return(
        <TodayWeather
        key={key}
        city={item.city.name}
        country={item.city.country}
        temp={item.list[0].main.temp}
        humidity={item.list[0].main.humidity}
        description={item.list[0].weather[0].description}
        />
      );
    });
    var futureWeatherList = this.state.weather.map(function(item, key){
         return (
           <FutureWeatherList
              key={key}
              tempList={item.list}
              date={item.list}
              desc={item.list}
             />
         );
       });

  return(
  <div className="col-sm-4">
  <div className="panel" style={boxstyle}>
  <div className="panel-heading" style={headstyle}>
  <SearchBox onNewSearch={this.handleSearch}/>
    {todayWeather}
    </div>
    <div className="row panel-body">
      {futureWeatherList}
    </div>
    </div>
  </div>
  );

  }

});

module.exports = WeatherApp;
