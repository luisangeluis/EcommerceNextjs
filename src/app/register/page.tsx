"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Register = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("ecoUserToken")) router.push("/");
    }
  }, []);
  return <section>Register</section>;
};

export default Register;
