import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type:'button'|'submit';
}
export const Button = ({ label,onClick,type }: ButtonProps) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};
