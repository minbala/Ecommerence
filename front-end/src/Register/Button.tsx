import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label,onClick }: ButtonProps) => {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};
