import { Link } from "react-router-dom";
import styles from "./LoginDetail.module.css";

interface LoginDetailProps {
  label: string;
  path: string;
}

export const LoginDetail = ({ label, path }: LoginDetailProps) => {
  return (
    <Link to={path} className={styles.loginDetail}>
      <span>{label}</span>
    </Link>
  );
};
