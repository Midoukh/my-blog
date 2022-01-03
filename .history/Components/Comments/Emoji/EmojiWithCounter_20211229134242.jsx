import Emoji from ".";
const EmojiWithCounter = ({
  emoji,
  emojiLabel,
  initialCounter,
  onIncrease,
}) => {
  return (
    <span
      className="emoji-container"
      id={emojiLabel}
      onClick={() => onIncrease(emoji)}
    >
      <Emoji emoji={emoji} label={emojiLabel} />
      <div className="emoji-counter-div">
        <span className="emoji-counter">{initialCounter}</span>
      </div>
    </span>
  );
};
export default EmojiWithCounter;
