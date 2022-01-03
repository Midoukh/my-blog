import Emoji from ".";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";

const EmojiAdder = ({ selectedEmojis, updateEmojiCount, EMOJI_OPTIONS }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // We have an array of already selected emojis
  const alreadySelectedEmojis = selectedEmojis.map((e) => e.emoji);

  // We create an array of Emoji components that are not already selected
  const emojiOptions = EMOJI_OPTIONS.filter(
    (e) => !alreadySelectedEmojis.includes(e.emoji)
  ).map((singleEmoji) => (
    <Emoji
      key={nanoid()}
      emoji={singleEmoji.emoji}
      label={singleEmoji.label}
      onClickCallback={() => {
        updateEmojiCount(singleEmoji.emoji); // We pass a callback which will add the emoji to the selected ones on click
        toggleMenu();
      }}
    />
  ));

  return (
    <Fragment>
      {emojiOptions.length > 0 && (
        <span className="reaction-adder-emoji">
          <Emoji onClickCallback={toggleMenu} emoji={"+"} label="emoji-adder" />
          <EmojiMenu />
        </span>
      )}
    </Fragment>
  );

  const EmojiMenu = () => {
    return (
      <div
        className={
          isMenuOpen ? "emoji-adder-menu-open" : "emoji-adder-menu-closed"
        }
      >
        {emojiOptions}
      </div>
    );
  };
};
export default EmojiAdder;
