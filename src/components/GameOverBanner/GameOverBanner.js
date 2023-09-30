import React from "react";

function Banner({ numOfGuesses, answer, status, onRestart }) {
  return (
    <>
      {status === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numOfGuesses === 1 ? "1 guess." : `${numOfGuesses} guesses.`}
            </strong>
          </p>
          <button onClick={onRestart}>Restart</button>
        </div>
      )}

      {status === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={onRestart}>Restart</button>
        </div>
      )}
    </>
  );
}

export default Banner;
