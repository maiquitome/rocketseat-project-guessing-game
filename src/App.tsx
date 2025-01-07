import styles from "./app.module.css";

import { WORDS, Challenge } from "./utils/words";

import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed";
import { useEffect, useState } from "react";

const ATTEMPTS_MARGIN = 5;

function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([
    { value: "A", correct: true },
  ]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);
    setLettersUsed([]);
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return <div>Carregando...</div>;
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letter.trim()) {
      return alert("Informe uma letra!");
    }

    const value = letter.toUpperCase();
    const letterAlreadyUsed = lettersUsed.find(
      (item) => item.value.toUpperCase() === value
    );

    if (letterAlreadyUsed) {
      return alert("Você já utilizou a letra " + value);
    }

    // correct attempts
    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((letter) => letter === value).length;

    const isCorrect = hits > 0;
    const currentScore = score + hits;

    setLettersUsed((prevState) => [
      ...prevState,
      { value, correct: isCorrect },
    ]);
    setScore(currentScore);
    setLetter("");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestartGame}
        />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            );
            return (
              <Letter
                key={Date.now() + Math.random()}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}

export default App;
