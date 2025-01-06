import { Letter } from "../Letter";
import styles from "./styles.module.css";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="Z" size="small" color="wrong" />
        <Letter value="R" size="small" color="correct" />
      </div>
    </div>
  );
}
