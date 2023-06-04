// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changing = event => {
    const s = event.target.value
    const y = s.length
    this.setState({count: y})
  }

  render() {
    const {count} = this.state

    return (
      <div className="outer">
        <div>
          <h1 className="color">Calculate the Letters You Entered</h1>
          <label className="color">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="inputt"
            onChange={this.changing}
          />
          <p className="number">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
