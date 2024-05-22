"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setUserToken } from "@/store/slices/userTokenSlice";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.scss";
import type { LoginFormInputs } from "@/types.d.ts";
import Input from "@/components/atoms/Input/Input";
import InputSubmit from "@/components/atoms/InputSubmit/InputSubmit";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("ecoUserToken")) router.push("/");
    }
  }, []);

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    loginUser(data)
      .then((res) => {
        const userToken = res.token;
        localStorage.setItem("ecoUserToken", userToken);
        dispatch(setUserToken(userToken));

        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  const loginUser = async (data: LoginFormInputs) => {
    const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    return await response.json();
  };

  return (
    <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.headerForm}>
        <h2>Login</h2>
      </div>
      <div className={styles.bodyForm}>
        <Input
          type={"text"}
          id={"email"}
          name={"email"}
          label={"Email"}
          register={register}
          validations={{ required: true }}
          errors={errors}
        />
        <Input
          type={"text"}
          id={"password"}
          name={"password"}
          label={"Password"}
          register={register}
          validations={{ required: true }}
          errors={errors}
        />
        <div className={styles.footerForm}>
          <InputSubmit value={"Login"} />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
