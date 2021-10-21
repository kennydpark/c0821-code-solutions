import React from 'react';

class CustomSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.switch === 0) {
      this.setState({ switch: 1 });
    } else if (this.state.switch === 1) {
      this.setState({ switch: 0 });
    }
  }

  render() {
    let state;
    let toggle;
    if (this.state.switch === 0) {
      state = 'OFF';
      toggle = 'circle-off';
    } else if (this.state.switch === 1) {
      state = 'ON';
      toggle = 'circle-on';
    }
    return (
      <div className='row'>
        <div onClick={this.handleClick} className={`switch ${state}`}></div>
        <div onClick={this.handleClick} className={toggle}></div>
        <div className='text'>{state}</div>
      </div>
    );
  }
}

export default CustomSwitch;
