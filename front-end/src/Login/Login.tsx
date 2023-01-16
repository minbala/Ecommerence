import { NavigationBar } from "../Register/NavigationBar";
import { Footer } from "../Register/Footer";
import styles from "../Register/Register.module.css";
import { Form } from "../Register/Form";
import { Input } from "../Register/Input";
import { ErrorStatement } from "../Register/ErrorStatement";
import { Button } from "../Register/Button";
import { LoginDetail } from "./LoginDetail";
import { ErrorList } from "../Register/ErrorList";
import { FormValues } from "../Register/Form";
import { useForm,SubmitHandler } from "react-hook-form";

export const Login = () => {

  const  {register,handleSubmit, formState:{errors}} =useForm<FormValues>();
  
  const onSubmit:SubmitHandler<FormValues>=data=>{alert(JSON.stringify(data))};

  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
       {(errors.email || errors
        .password)&& <ErrorStatement>
          <h5>Please adjust the following</h5>
          <ul>
            { errors.name?.message&&<ErrorList label={errors.name.message} />}
            {errors.password?.message&&<ErrorList label={errors.password.message} />}
          </ul>
        </ErrorStatement>}
        <Input register={register}
        required="Name can't be blank" type="text" name="name" id="name" label="Name"
         message={errors.name?.message} pattern={{value:RegExp("^[a-zA-Z0-9]{3,20}$"),message:"Name is not valid."}}></Input>
        <Input
        register={register}
        required="Password can't be blank"
          type="password"
          name="password"
          id="password"
          label="Password"
          message={errors.password?.message}
        ></Input>
        <LoginDetail label="Forget Your Password?" path="/forgetpassword" />
        <Button
          label="Sign In"
          
          type='submit'
        />
        <LoginDetail label="Create Account" path="/register" />
      </Form>
      <Footer />
    </div>
  );
};
