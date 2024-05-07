/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickEmojisList: [], isGameInProgress: true})
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  getshuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderOfEmojisListGame = () => {
    const shuffledEmojisList = this.getshuffledEmojisList()
    return (
      <div className="emojis-container">
        <ul className="ul-list-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderOfScoreWinOrLose = () => {
    const {emojisList} = this.props
    const {clickEmojisList} = this.state
    const isWon = clickEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickEmojisList.length}
      />
    )
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojisList} = this.state
    const isIncludesEmojiId = clickEmojisList.includes(id)
    const clickEmojisListLength = clickEmojisList.length

    if (isIncludesEmojiId) {
      this.finishGameAndSetTopScore(clickEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickEmojisListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojisList: [...prevState.clickEmojisList, id],
      }))
    }
  }

  render() {
    const {topScore, clickEmojisList, isGameInProgress} = this.state
    const score = clickEmojisList.length

    return (
      <>
        <NavBar
          topScore={topScore}
          score={score}
          isGameInProgress={isGameInProgress}
        />
        <div className="bg-App-container">
          {isGameInProgress
            ? this.renderOfEmojisListGame()
            : this.renderOfScoreWinOrLose()}
        </div>
      </>
    )
  }
}

export default EmojiGame
