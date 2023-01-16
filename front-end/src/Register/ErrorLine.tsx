import ErrorIcon from "@mui/icons-material/Error";
import styles from "./ErrorLine.module.css";

interface ErrorLineProps {
  inputType: string;
}

export const ErrorLine = ({ inputType }: ErrorLineProps) => {
  return (
    <div className={styles.error__line}>
      <ErrorIcon color="error" fontSize="small"></ErrorIcon>
      <span>{inputType}</span>
    </div>
  );
};
