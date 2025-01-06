import { Tip } from "./components/Tip";
import styles from "./app.module.css";

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
      </main>
    </div>
  );
}

export default App;
