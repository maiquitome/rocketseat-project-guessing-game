import styles from "./app.module.css";

import { WORDS, Challenge } from "./utils/words";

import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed";
import { useEffect, useState } from "react";

function App() {
  const [letter, setLetter] = useState("");
  const [attempts, setAttempts] = useState(0);
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
    setAttempts(0);
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

    setLettersUsed((prevState) => [...prevState, { value, correct: false }]);

    setLetter("");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip tip="Dica de teste" />

        <div className={styles.word}>
          {challenge.word.split("").map(() => (
            <Letter key={Date.now() + Math.random()} />
          ))}
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
