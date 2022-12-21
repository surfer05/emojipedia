import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

function createEmoji(emoji) {
    return <Dictionary 
        key = {emoji.id}
        emoji = {emoji.emoji}
        name = {emoji.name}
        meaning = {emoji.meaning}
    />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
