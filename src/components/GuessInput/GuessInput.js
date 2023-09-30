import React from "react";

function GuessInput({ onSubmit, status, tentativeGuess, setTentativeGuess }) {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        disabled={status === "won" || status === "lost" ? true : false}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
