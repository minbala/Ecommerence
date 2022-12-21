import styles from "./ErrorStatement.module.css";

export const ErrorStatement = () => {
  return (
    <div className={styles.error__block}>
      <h5>Please adjust the following</h5>
      <ul>
        <li>
          <a href="#email">
            <span>Email can't be blank</span>
          </a>
        </li>
        <li>
          <a href="#password">
            <span>Password can't be blank</span>
          </a>
        </li>
        <li>
          <a href="#re__password">
            <span>Password doesn't match</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
