import React from 'react';

class CustomStopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isOn: false,
      icon: 'fas fa-play'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (this.state.isOn === false) {
      this.start();
      this.setState({
        isOn: true,
        icon: 'fas fa-pause'
      });
    } else {
      this.stop();
      this.setState({
        isOn: false,
        icon: 'fas fa-play'
      });
    }
  }

  handleReset() {
    if (this.state.isOn === false) {
      clearInterval(this.timerID);
      this.setState({
        count: 0,
        isOn: false,
        icon: 'fas fa-play'
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
    return (
      <div>
        <div onClick={this.handleReset} className='face'>
          <div className='time'>{count}</div>
        </div>;
        <i onClick={this.handleClick} className={this.state.icon}></i>
      </div>
    );
  }
}

export default CustomStopWatch;
