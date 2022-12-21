import styles from "./Register.module.css";
import { Form } from "./Form";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export const Register = () => {
  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form />
      <Footer />
    </div>
  );
};
