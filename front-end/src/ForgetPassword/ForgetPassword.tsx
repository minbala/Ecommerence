import { NavigationBar } from "../Register/NavigationBar";
import { Footer } from "../Register/Footer";
import styles from "../Register/Register.module.css";
import { Form } from "../Register/Form";
import { Input } from "../Register/Input";
import { Button } from "../Register/Button";
import { LoginDetail } from "../Login/LoginDetail";

export const ForgetPassword = () => {
  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form>
        <h1 style={{ fontSize: 15 }}>RESET YOUR PASSWORD</h1>
        <h6>We will send you an email to reset your password</h6>
        <Input name="email" id="email" label="Email" type="email" />
        <Button
          label="Submit"
          onClick={() => {
            console.log("In forget password");
          }}
        />
      </Form>
      <LoginDetail label="Cancel" path="/login" />

      <Footer />
    </div>
  );
};
