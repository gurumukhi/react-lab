1. Introducing JSX
===================
* Syntax extension to JavaScript.

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

2. Rendering Elements
======================
* React Only Updates What’s Necessary

const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

3. Components and Props
========================
* Conceptually, components are like JavaScript functions. 
* They accept arbitrary inputs called “props”, which is read-only.
* And return React elements describing what should appear on the screen.
* Components can be declared using functions or classes.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

4. State and Lifecycle
=======================
* Class components's constructor should always call the base constructor with props.
* Do Not Modify State Directly, use this.setState() instead.
* State Updates are Merged & State Updates May Be Asynchronous
* A component may choose to pass its state down as props to its child components.
    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
* Sequence: constructor, componentDidMount, render, componentWillUnmount

5. Handling Events
===================
* A common pattern is for an event handler to be a method on the class.
* Either bind `this` with evHandler in constructor or use `(e) => this.evHandler(e)` in onClick
* Passing argument ot evHandler
 * <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
 * <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
* Binding evHandler to `this` -

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {}
  render() {
    return (
      <button onClick={this.handleClick}>
      </button>
    );
  }
}

6. More
=======
* An input form element whose value is controlled by React in this way is called a “controlled component”.
* There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.
* React has a powerful composition model, and recommends using composition instead of inheritance to reuse code between components.