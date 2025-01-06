import { Tip } from "./components/Tip";
import styles from "./app.module.css";

import { Letter } from "./components/Letter";
import { Header } from "./components/Header";

function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Dica de teste" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
      </main>
    </div>
  );
}

export default App;
