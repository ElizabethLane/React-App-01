var React = require('react');

var GreeterMessage = React.createClass({
    render:  function(){
      var name = this.props.name;
      var message = this.props.message;

      return (
        //This is JSX CODE
        <div>
          <h1>Hello {name}!</h1>
          <p> {message} </p>
        </div>
      );
    }
});

module.exports = GreeterMessage;
//module.exports like a return statement
//when a file is required module.exports is what
//you get back
