import LoginForm from "@/components/molecules/LoginForm/LoginForm";
import styles from "./login.module.scss";

const login = () => {
  return (
    <section className={styles.loginContainer}>
      <LoginForm />
    </section>
  );
};

export default login;
