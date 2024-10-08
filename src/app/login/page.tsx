import LoginForm from "@/components/molecules/LoginForm/LoginForm";
import styles from "./login.module.scss";
import SubTitle2 from "@/components/atoms/SubTitle2/SubTitle2";

const login = () => {
  return (
    <section className={styles.loginContainer}>
      <section className={`${styles.user} absolute`}>
        <p>
          email: <b>user.one@correo.com</b>
        </p>
        <p>
          Password: <b>12345</b>
        </p>
      </section>

      <LoginForm />
    </section>
  );
};

export default login;
