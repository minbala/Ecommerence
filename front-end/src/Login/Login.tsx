import { NavigationBar } from "../Register/NavigationBar";
import { Footer } from "../Register/Footer";
import styles from "../Register/Register.module.css";
import { Form } from "../Register/Form";
import { Input } from "../Register/Input";
import { ErrorStatement } from "../Register/ErrorStatement";
import { Button } from "../Register/Button";
import { LoginDetail } from "./LoginDetail";
import { ErrorList } from "../Register/ErrorList";

export const Login = () => {
  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form>
        <h1>Login</h1>
        <ErrorStatement>
          <h5>Please adjust the following</h5>
          <ul>
            <ErrorList label="Email can't be blank" />
            <ErrorList label="Password can't be blank" />
          </ul>
        </ErrorStatement>
        <Input type="email" name="email" id="email" label="Email"></Input>
        <Input
          type="password"
          name="password"
          id="password"
          label="Password"
        ></Input>
        <LoginDetail label="Forget Your Password?" path="/forgetpassword" />
        <Button
          label="Sign In"
          onClick={() => {
            console.log("/login");
          }}
        />
        <LoginDetail label="Create Account" path="/register" />
      </Form>
      <Footer />
    </div>
  );
};
