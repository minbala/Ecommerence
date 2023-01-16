import { NavigationBar } from "../Register/NavigationBar";
import { Footer } from "../Register/Footer";
import styles from "../Register/Register.module.css";
import { Form } from "../Register/Form";
import { Input } from "../Register/Input";
import { Button } from "../Register/Button";
import { LoginDetail } from "../Login/LoginDetail";
import { FormValues } from "../Register/Form";
import { useForm,SubmitHandler } from "react-hook-form";
import { ErrorStatement } from "../Register/ErrorStatement";
import { ErrorLine } from "../Register/ErrorLine";
import { ErrorList } from "../Register/ErrorList";

export const ForgetPassword = () => {
  const  {register,handleSubmit,formState:{errors}} =useForm<FormValues>();
  
  const onSubmit:SubmitHandler<FormValues>=data=>{alert(JSON.stringify(data))};

 
  
  return (
    <div className={styles.login}>
      <NavigationBar />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ fontSize: 15 }}>RESET YOUR PASSWORD</h1>
        <h6>We will send you an email to reset your password</h6>
        {(errors.email || errors
        .password)&& <ErrorStatement>
          <h5>Please adjust the following</h5>
          <ul>
            { errors.email?.message&&<ErrorList label={errors.email?.message} />}
     
          </ul>
        </ErrorStatement>}
        <Input register={register} required="Email can't be blank" name="email" id="email" label="Email" type="text" 
        pattern={{value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        message:"Email is not valid"}}
        message={errors.email?.message}/>
        <Button
          label="Submit"
          
          type='submit'
        />
      </Form>
      <LoginDetail label="Cancel" path="/login" />

      <Footer />
    </div>
  );
};
