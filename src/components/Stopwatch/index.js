// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isOn: false,
  }

  startButton = () => {
    const {isOn} = this.state
    if (!isOn) {
      this.setState({isOn: true})
      this.timerId = setInterval(this.statusChanges, 1000)
    }
  }

  statusChanges = () => {
    this.setState(prevState => ({
      minutes:
        prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes,
      seconds: prevState.seconds !== 59 ? prevState.seconds + 1 : 0,
    }))
  }

  stopButton = () => {
    this.setState({isOn: false})
    clearInterval(this.timerId)
  }

  resetButton = () => {
    this.setState({minutes: 0, seconds: 0, isOn: false})
    clearInterval(this.timerId)
  }

  render() {
    const {minutes, seconds} = this.state
    const updateMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const updateSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return (
      <div className="bg-container">
        <h1 className="head">Stopwatch</h1>
        <div className="main-container">
          <div className="watch-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="image"
              alt="stopwatch"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="result">{`${updateMinutes}:${updateSeconds}`}</h1>
          <div className="btn-container ">
            <button
              className="green btn"
              type="button"
              onClick={this.startButton}
            >
              Start
            </button>
            <button className="red btn" type="button" onClick={this.stopButton}>
              Stop
            </button>
            <button
              className="yellow btn"
              type="button"
              onClick={this.resetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
