class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount () {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timerId);
  }

  tick () {
    this.setState({
      time: new Date()
    });
  }

  render () {
    return <div> {this.state.time.toLocaleTimeString()} </div>;
  }
}

ReactDOM.render(
  <Clock />,
  document.querySelector('#root')
);
