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

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault;

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='name'/>
        <button>Set Name</button>
      </form>
    );
  }
});
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function(){
      return {
        name: this.props.name
      }
    },

  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
