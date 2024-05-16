"use client";

import styles from "./myPurchases.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MyPurchases = () => {
  const userToken = useSelector((state) => state.userToken);
  const [purchases, setPurchases] = useState(null);

  useEffect(() => {
    getMyPurchases(userToken)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  // const purchases = await getMyPurchases(userToken);
  return <section className={styles.miPurchases}></section>;
};

const getMyPurchases = async (userToken) => {
  const init = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  return await fetch(`${apiUrl}/api/v1/orders/`, init);
};
export default MyPurchases;
