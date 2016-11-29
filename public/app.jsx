var Greeter = React.createClass({
  render: function () {
    var name = this.props.name;

    return (
      <div>
        <h1> Hello React!</h1>
        <p> This is from the component </p>
      </div>

    );
  }
});


ReactDOM.render(
  <Greeter name="Liz"/>,
  //The "name" attribute is a prop
  //See line 3
  document.getElementById('app')
);
