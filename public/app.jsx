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

  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0){
      this.setState({
        name: name
      });
    }
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1> Hello {name}!</h1>
        <p> {message}</p>
        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='name'/>
          <button>Set Name</button>
        </form>
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
