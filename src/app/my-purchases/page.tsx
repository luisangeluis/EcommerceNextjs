"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//STYLES
import styles from "./myPurchases.module.scss";
//COMPONENTS
import Title2 from "@/components/atoms/Title2/Title2";
import CardPurchaseDetail from "@/components/molecules/CardPurchaseDetail/CardPurchaseDetail";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MyPurchases = () => {
  const [purchases, setPurchases] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const currentToken = localStorage.getItem("ecoUserToken");

      if (currentToken) {
        getPurchases(currentToken)
          .then((res) =>res.json())
          .then((res) => {
            console.log(res.response);
            setPurchases(res.response);
          })
          .catch((error) => console.log(error));
      } else {
        router.push("/");
      }
    }
  }, []);

  const getPurchases = async (userToken: string) => {
    const init = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    const purchases = await fetch(`${apiUrl}/api/v1/orders/`, init);
    return purchases;
  };

  return (
    <section className={styles.myPurchases}>
      <Title2>My purchases</Title2>
      {purchases?.map((e) => <CardPurchaseDetail purchaseDetail={e} key={e.id}/>)}
    </section>
  );
};

export default MyPurchases;
