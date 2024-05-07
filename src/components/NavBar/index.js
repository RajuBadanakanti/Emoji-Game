// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isGameInProgress} = props
  return (
    <navbar className="navbar-container">
      <div className="logo-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-conatainer">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </navbar>
  )
}
export default NavBar
