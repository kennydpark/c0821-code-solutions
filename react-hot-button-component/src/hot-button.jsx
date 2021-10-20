import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let counter = this.state.clicks;
    counter++;
    this.setState({ clicks: counter++ });
  }

  render() {
    let temp;
    if (this.state.clicks < 4) {
      temp = 'cold';
    } else if (this.state.clicks < 7) {
      temp = 'cool';
    } else if (this.state.clicks < 10) {
      temp = 'tepid';
    } else if (this.state.clicks < 13) {
      temp = 'warm';
    } else if (this.state.clicks < 16) {
      temp = 'hot';
    } else {
      temp = 'nuclear';
    }
    return <button onClick={this.handleClick} className={temp}>Hot Button</button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
