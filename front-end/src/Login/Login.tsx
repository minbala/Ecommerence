import { NavigationBar } from "../Register/NavigationBar";
import { Footer } from "../Register/Footer";
import styles from "../Register/Register.module.css";
import { Form } from "../Register/Form";

export const Login = () => {
  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form />
      <Footer />
    </div>
  );
};
