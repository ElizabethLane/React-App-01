var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');
//Can leave off .jsx on module name, because in webpack config
//specified extensions we want to support
var GreeterForm = require('./components/GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function(){
      return {
        name: this.props.name,
        message: this.props.message
      }
    },

  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Liz';
var message = "Welcome to the coolest message ever"

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  //The "name" attribute is a prop
  //See line 3
  //Here we are passing a name in
  //getDefaultProps allows this attribute(prop)
  //to have a default value if none specified
  document.getElementById('app')
);
