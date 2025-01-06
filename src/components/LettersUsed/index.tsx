import { Letter } from "../Letter";
import styles from "./styles.module.css";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="X" size="small" />
        <Letter value="Z" size="small" />
      </div>
    </div>
  );
}
