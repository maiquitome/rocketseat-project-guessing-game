import styles from "./styles.module.css";

type Props = React.ComponentProps<"button"> & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <button type="button" {...rest} className={styles.button}>
      {title}
    </button>
  );
}
