import styles from "./Register.module.css";
import { Form,FormValues } from "./Form";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import { Input } from "./Input";
import { ErrorStatement } from "./ErrorStatement";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { ErrorList } from "./ErrorList";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";




export const Register = () => {
  const logIn =useNavigate();
  const  {register,handleSubmit, formState:{errors}} =useForm<FormValues>();
  
  
  const onSubmit:SubmitHandler<FormValues>=data=>{console.log(data)};
  console.log(errors);

  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Account</h1>
       { (errors.name || errors.email || errors.password) &&<ErrorStatement>
          <h5>Please adjust the following</h5>
          <ul>
         {errors.name?.message&& <ErrorList label={errors.name?.message} />}
           { errors.email?.message &&<ErrorList label={errors.email?.message} />}
            {errors.password?.message &&<ErrorList label={errors.password.message} />}
          </ul>
        </ErrorStatement>}
        <Input
        register={register}
        required="Name can't be blank"
          name="name"
          type="text"
          label=" Name"
          id="name"
          message={errors.name?.message}
          pattern={{value:RegExp("^[a-zA-Z0-9]{3,20}$"),message:"Plz select a name without special characters."}}
        />
       
        <Input register={register}
        required="Email can't be blank" name="email" type="text" label="Email" id="email" 
         message={errors.email?.message}
         pattern={{value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
         message:"Email is not valid"}}/>
        
        <Input register={register}
        required="Password can't be blank" name="password" type="password" label="Password" id="password" 
        message={errors.password?.message} minLength={{value:6,message:"Password needs to be at least 6 characters"}} />
        
        <Button
          label="CREATE"
          type='submit'
          
        />
        <Button
          label="Already have an account? Sign in >>>"
          onClick={() => {
            logIn('/login');
          }}
          type='button'
        />
      </Form>
      <Footer />
    </div>
  );
};
