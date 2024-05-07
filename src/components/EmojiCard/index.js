// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const onClickEmojiBtn = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-list-card">
      <button type="button" className="emoji-btn" onClick={onClickEmojiBtn}>
        <img src={emojiUrl} alt={emojiName} className="emoji-png" />
      </button>
    </li>
  )
}

export default EmojiCard
