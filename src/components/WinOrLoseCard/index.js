// Write your code here.
import './index.css'

const winImageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImageUrl =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {onClickPlayAgain, isWon, score} = props
  const imageUrl = isWon ? winImageUrl : loseImageUrl
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLable = isWon ? 'Best Score' : 'Score'

  return (
    <div className="won-lose-container">
      <div className="card-container">
        <img src={imageUrl} className="win-lose-emoji" alt="win or lose" />
        <h1 className="your-result-text">{gameStatus}</h1>
        <p className="score-result-text">{scoreLable}</p>
        <p className="score-result">{score}/12</p>
        <button
          type="button"
          className="playAgain-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
