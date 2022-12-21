import styles from "./Form.module.css";
import { ErrorLine } from "./ErrorLine";
import { ErrorStatement } from "./ErrorStatement";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigateToSignIn = useNavigate();

  return (
    <form className={styles.form}>
      <h1>Create Account</h1>
      <ErrorStatement />
      <div className={styles.form__control}>
        <label htmlFor="first-name">
          <a href="#first__name">First Name</a>
        </label>
        <input type="text" name="first-name" id="first__name" />
      </div>
      <div className={styles.form__control}>
        <label htmlFor="last-name">
          <a href="#last__name">Last Name</a>
        </label>
        <input type="text" name="last-name" id="last__name" />
      </div>
      <div className={styles.form__control}>
        <label htmlFor="email">
          <a href="#email">Email</a>
        </label>
        <input type="email" name="email" id="email" />
        <ErrorLine inputType="Email" />
      </div>
      <div className={styles.form__control}>
        <label htmlFor="password">
          <a href="#password">Password</a>
        </label>
        <input type="text" name="password" id="password" />
        <ErrorLine inputType="Password" />
      </div>
      <div className={styles.form__control}>
        <label htmlFor="re__password">
          <a href="#re__password">Re-enter Password</a>
        </label>
        <input type="text" name="re-password" id="re__password" />
        <ErrorLine inputType="Password" />
      </div>
      <Button
        label="CREATE"
        onClick={() => {
          console.log("gg");
        }}
      />
      <Button
        label="Already have an account? Sign in >>>"
        onClick={() => {
          navigateToSignIn("/login");
        }}
      />
    </form>
  );
};
