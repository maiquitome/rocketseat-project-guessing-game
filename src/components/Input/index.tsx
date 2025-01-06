import styles from "./styles.module.css";

export function Input({ ...rest }: React.ComponentProps<"input">) {
  return (
    <div>
      <input type="text" {...rest} className={styles.input} />
    </div>
  );
}
