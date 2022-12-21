import styles from "./Input.module.css";
import { ErrorLine } from "./ErrorLine";

interface InputProps {
  type: string;
  name: string;
  id: string;
  label: string;
}

export const Input = ({ type, name, id, label }: InputProps) => {
  return (
    <div className={styles.form__control}>
      <label htmlFor={name}>
        <a href={`#${id}`}>{label}</a>
      </label>
      <input type={type} name="first-name" id={id} />
      <ErrorLine inputType={label} />
    </div>
  );
};
