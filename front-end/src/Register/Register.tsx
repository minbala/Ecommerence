import styles from "./Register.module.css";
import { Form } from "./Form";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import { Input } from "./Input";
import { ErrorStatement } from "./ErrorStatement";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { ErrorList } from "./ErrorList";

export const Register = () => {
  const navigateToSignIn = useNavigate();
  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form>
        <h1>Create Account</h1>
        <ErrorStatement>
          <h5>Please adjust the following</h5>
          <ul>
          <ErrorList label="Namw can't be blank" />
            <ErrorList label="Email can't be blank" />
            <ErrorList label="Password can't be blank" />
            <ErrorList label="Password doesn't match" />
          </ul>
        </ErrorStatement>
        <Input
          name="name"
          type="text"
          label=" Name"
          id="name"
        />
       
        <Input name="email" type="email" label="Email" id="email" />
        <Input name="password" type="password" label="Password" id="password" />
        <Input
          name="re-password"
          type="password"
          label="Re-enter Password"
          id="re__password"
        />
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
      </Form>
      <Footer />
    </div>
  );
};
