import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word = "", answer }) {
  const wordIsEmpty = word === "";
  const wordArray = wordIsEmpty ? range(5) : word.split("");
  const checkArray = checkGuess(word, answer);

  // console.log(checkArray);

  return (
    <p className="guess">
      {wordArray.map((letter, index) => (
        <span
          key={index}
          className={checkArray ? `cell ${checkArray[index].status}` : "cell"}
        >
          {wordIsEmpty ? "" : letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
