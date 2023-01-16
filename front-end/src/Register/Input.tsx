import styles from "./Input.module.css";
import { ErrorLine } from "./ErrorLine";
import { FormValues } from "./Form";
import { Path } from "react-hook-form";
import { UseFormRegister } from "react-hook-form/dist/types";

interface InputProps {
  type: string;
  label:string;
  register:UseFormRegister<FormValues>;
  required:string;
  id:string;
  name:Path<FormValues>;
  message?:string;
  minLength?:{value:number,message:string};
  pattern?:{value:RegExp,message:string}
}

export const Input = ({ type,register, id, label,name,required,message,minLength,pattern }: InputProps) => {
  return (
    <div className={styles.form__control}>
      <label htmlFor={name}>
        <a href={`#${id}`}>{label}</a>
      </label>
      <input type={type} {...register(name,{required,minLength,pattern})} id={id} />
      {message &&<ErrorLine inputType={message} />}
    </div>
  );
};
