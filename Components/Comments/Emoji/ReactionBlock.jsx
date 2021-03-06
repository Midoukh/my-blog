import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import EmojiWithCounter from "./EmojiWithCounter";
// import getKey from "../../lib/keyGen";
import EmojiAdder from "./EmojiAdder";
import { ReactionsContext } from "../Comments";
import { writeClient as client } from "../../../lib/sanityClient";
import { DEFAULT_EMOJI_OPTIONS } from "../../../lib/emojiConfig";

let dbDebouncerTimer;

const ReactionBlock = ({ commentId }) => {
  // We get the initial reactions we previously fetched from the Context
  const contextReactions = useContext(ReactionsContext)
    ?.filter((r) => r.commentId === commentId)
    .map((r) => r.reactions)
    ?.sort((a, b) => (a.counter < b.counter ? 1 : -1))[0];
  const [reactions, setReactions] = useState([]);
  const [shouldUpdateDb, setShouldUpdateDb] = useState(false);

  let querySub = undefined;

  useEffect(() => {
    // If there are reactions in the context, set them
    if (contextReactions) setReactions(contextReactions);

    // Subscribe to the query Observable and update the state on each update
    const query = `*[_type == "commentReactions" && commentId=="${commentId}"]`;
    querySub = client.listen(query).subscribe((update) => {
      if (update) {
        setReactions([
          ...update.result.reactions.sort((a, b) =>
            a.counter < b.counter ? 1 : -1
          ),
        ]);
      }
    });

    // Unsubscribe on Component unmount
    return () => {
      querySub.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (shouldUpdateDb) updateReactionsOnDatabase();
    setShouldUpdateDb(false);
  }, [shouldUpdateDb]);

  // Onclick, update the emoji counter and start a timer to update the database
  const updateEmojiCount = (emoji) => {
    setShouldUpdateDb(false);
    let emojiFromState = reactions.filter((em) => em.emoji === emoji)[0];
    if (!emojiFromState) {
      emojiFromState = DEFAULT_EMOJI_OPTIONS.filter(
        (em) => em.emoji === emoji
      )[0];
      emojiFromState.counter = 1;
      setReactions((reactions) =>
        [...reactions, emojiFromState].sort((a, b) =>
          a.counter < b.counter ? 1 : -1
        )
      );
    } else {
      emojiFromState.counter++;
      setReactions((reactions) =>
        [
          ...reactions.filter((rea) => rea.emoji !== emojiFromState.emoji),
          emojiFromState,
        ].sort((a, b) => (a.counter < b.counter ? 1 : -1))
      );
    }
    setShouldUpdateDb(true);
  };

  // Debouncer to avoid updating the database on every click
  const updateReactionsOnDatabase = () => {
    clearTimeout(dbDebouncerTimer);
    dbDebouncerTimer = setTimeout(() => {
      axios.post("/api/addReaction", {
        commentId: commentId,
        reactions: reactions,
      });
      dbDebouncerTimer = null;
    }, 1000 * 1);
  };

  const mappedReactions = reactions.map((reaction) => (
    <EmojiWithCounter
      key={nanoid()}
      emoji={reaction.emoji}
      emojiLabel={reaction}
      initialCounter={reaction.counter}
      onIncrease={updateEmojiCount}
    />
  ));

  return (
    <div className="reaction-block">
      {mappedReactions}
      <EmojiAdder
        selectedEmojis={reactions}
        updateEmojiCount={updateEmojiCount}
        EMOJI_OPTIONS={DEFAULT_EMOJI_OPTIONS}
      />
    </div>
  );
};

export default ReactionBlock;
