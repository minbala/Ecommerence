import styles from "./ErrorList.module.css";

interface ErrorListProps {
  label: string;
}

export const ErrorList = ({ label }: ErrorListProps) => {
  return (
    <li className={styles.li}>
      <a href="#email">
        <span>{label}</span>
      </a>
    </li>
  );
};
