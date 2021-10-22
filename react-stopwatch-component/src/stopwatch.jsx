import React from 'react';

class CustomStopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isOn: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (this.state.isOn === false) {
      this.start();
      this.setState({
        isOn: true
      });
    } else {
      this.stop();
      this.setState({
        isOn: false
      });
    }
  }

  handleReset() {
    if (this.state.isOn === false) {
      this.stop();
      this.setState({
        count: 0,
        isOn: false
      });
    }
  }

  start() {
    this.timerID = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.timerID);
  }

  render() {
    const count = this.state.count;
    let iconClass;
    if (this.state.isOn === false) {
      iconClass = 'fas fa-play icon';
    } else {
      iconClass = 'fas fa-pause icon';
    }
    return (
      <div>
        <div onClick={this.handleReset} className='face'>
          <div className='time'>{count}</div>
        </div>
        <i onClick={this.handleClick} className={iconClass}></i>
      </div>
    );
  }
}

export default CustomStopWatch;
