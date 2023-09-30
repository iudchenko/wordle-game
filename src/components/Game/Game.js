import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [tentativeGuess, setTentativeGuess] = useState("");

  // running, lost, won
  const [status, setStatus] = useState("running");

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleSubmit(e) {
    e.preventDefault();

    // Guard clause if max number of characters in guess reached
    if (tentativeGuess.length !== 5) {
      window.alert("Please, enter exactly 5 letters 😊");
      return;
    }

    const nextGuesses = [
      ...guesses,
      { id: crypto.randomUUID(), word: tentativeGuess },
    ];

    setGuesses(nextGuesses);
    setTentativeGuess("");

    // Calculate win
    if (tentativeGuess === answer) {
      setStatus("won");
      return;
    }

    // Calculate loss
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
      return;
    }
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setStatus("running");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        onSubmit={handleSubmit}
        status={status}
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
      />
      {(status === "won" || status === "lost") && (
        <GameOverBanner
          numOfGuesses={guesses.length}
          answer={answer}
          status={status}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
