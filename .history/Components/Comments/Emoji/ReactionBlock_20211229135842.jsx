import { useState, useEffect, useContext } from "react";
import EmojiWithCounter from "./EmojiWithCounter";
import getKey from "../../lib/keyGen";
import EmojiAdder from "./EmojiAdder";
import { ReactionsContext } from "../Comments";
import { writeClient as client } from "../../../lib/sanityClient";
import { DEFAULT_EMOJI_OPTIONS } from "../../../lib/emojiConfig";
