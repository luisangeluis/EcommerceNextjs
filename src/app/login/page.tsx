import LoginForm from "@/components/molecules/LoginForm/LoginForm";
import styles from "./login.module.scss";
import SubTitle2 from "@/components/atoms/SubTitle2/SubTitle2";

const login = () => {
  return (
    <section className={styles.loginContainer}>
      <section className={`${styles.user} absolute`}>
        <p>
          <b>Email:</b>customer.one@correo.com
        </p>
        <p>
          <b>Pass:</b>12345
        </p>
      </section>

      <LoginForm />
    </section>
  );
};

export default login;
