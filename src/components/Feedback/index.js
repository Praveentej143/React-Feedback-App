// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(eachObj => (
            <li className="list-item" key={eachObj.id}>
              <button className="emoji-btn" type="button">
                <img
                  src={`${eachObj.imageUrl}`}
                  alt={`${eachObj.name}`}
                  className="emoji"
                  onClick={this.onClickEmoji}
                />
              </button>
              <br />
              <span className="quote">{eachObj.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="card">
        <img src={`${loveEmojiUrl}`} alt="love emoji" className="love-emoji" />
        <h1 className="greet">Thank You</h1>
        <p className="desc">
          We will use your feedback to improve our customer support and
          performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedbackSelected
            ? this.renderThankYou()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
