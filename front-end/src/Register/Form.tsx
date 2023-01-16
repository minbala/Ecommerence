import styles from "./Form.module.css";

interface FormProps {
  children: React.ReactNode;
  onSubmit:React.FormEventHandler<HTMLFormElement>;
}

export interface FormValues{
  name:string;
  email:string;
  password:string
}
export const Form = ({ children, onSubmit }: FormProps) => {
  return <form className={styles.form} onSubmit={onSubmit}>{children}</form>;
};
