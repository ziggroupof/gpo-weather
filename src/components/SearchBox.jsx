var React = require('react');

var searchIconBorder = {
  backgroundColor: "transparent",
  borderRadius: 50,
  border: "2px solid #fff",
  width: 46,
  height: 46,
  cursor: "pointer"
}
var inputStyle = {
  backgroundColor: "rgba(255,255,255,0.2)",
  border: "none",
  width: "100%",
  height:46,
  borderRadius: 50,
  border: "2px solid #fff",
  padding: 10,
  paddingLeft: 20
};
var searchIcon = {
  fontSize: 14
}
var marginBottom = {
  paddingTop: 10,
  paddingBottom: 10
}

var SearchBox = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
    	this.props.onNewSearch(this.refs.searchInput.value);
      this.refs.searchInput.value = '';
    }
  },

  render: function() {
    return (
      <div className="row" style={marginBottom}>
        <div className="col-xs-12">
          <div className="row">
            <form onSubmit={this.handleSubmit} >
              <div className="col-xs-9">

                  <input style={inputStyle} ref="searchInput" placeholder="Search..." />

              </div>
              <div className="col-xs-3">
                <button style={searchIconBorder} type="btn">
                  <i className="fa fa-search" style={searchIcon}></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchBox;
