import LoginForm from "@/components/molecules/LoginForm/LoginForm";
import styles from "./login.module.scss";

const login = () => {
  return (
    <section className={styles.login}>
      <LoginForm />
    </section>
  );
};

export default login;
