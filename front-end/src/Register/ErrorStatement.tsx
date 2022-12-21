import styles from "./ErrorStatement.module.css";

interface ErrorStateMentProps {
  children: React.ReactNode;
}

export const ErrorStatement = ({ children }: ErrorStateMentProps) => {
  return <div className={styles.error__block}>{children}</div>;
};
