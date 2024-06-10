"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { setUserToken } from "@/store/slices/userTokenSlice";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.scss";
import type { LoginFormInputs } from "@/types.d.ts";
import Input from "@/components/atoms/Input/Input";
import InputSubmit from "@/components/atoms/InputSubmit/InputSubmit";
import { getUser, setUser } from "@/store/slices/userSlice";
import Loader from "../Loader/Loader";
import { setLoadingErrorMessage } from "@/store/slices/loadingErrorMessageSlice";

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
  const user = useSelector((state) => state.user);
  const loadingErrorMessage = useSelector((state) => state.loadingErrorMessage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("ecoUserToken")) router.push("/");
    }
  }, []);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      dispatch(setLoadingErrorMessage({ isLoading: true }));
      const tokenRes = await getUserToken(data);
      console.log(tokenRes);

      const tokenData = await tokenRes!.json();

      if (tokenRes!.ok) {
        dispatch(getUser(tokenData.token));
        dispatch(setLoadingErrorMessage({ isLoading: false }));
        localStorage.setItem("ecoUserToken", tokenData.token);
      } else {
        console.log(tokenData.message);
        dispatch(
          setLoadingErrorMessage({
            isLoading: false,
            isError: true,
            message: tokenData.message,
          }),
        );
      }
      // console.log(tokenRes.status);

      // if (tokenRes.token) {
      //   dispatch(getUser(tokenRes.token));
      // }

      // console.log(res.status);

      // const user = await res.json();

      // dispatch(setUser(user.response));
      // localStorage.setItem("ecoUserToken", token);

      // router.push("/");
    } catch (error) {
      console.log({ error });
    }
  };

  const getUserToken = async (data: LoginFormInputs) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loadingErrorMessage.isLoading && <Loader />}
      <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.headerForm}>
          <h2>LOGIN</h2>
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
            type={"password"}
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
    </>
  );
};

export default LoginForm;
