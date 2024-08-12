import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "@/store/slices/cartSlice";
//Styles
import styles from "./CartItem.module.scss";
//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//Components
import Select from "@/components/molecules/Select/Select";
import firstMayusc from "@/utils/firstMayusc";

const productQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CartItem = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    const currentToken = localStorage.getItem("ecoUserToken");

    +!currentToken
      ? router.push("/login")
      : dispatch(deleteCartItem(currentToken, item.id));
  };

  const updateItems = (value) => {
    const currentToken = localStorage.getItem("ecoUserToken");

    if (currentToken) {
      dispatch(
        updateCartItem(currentToken, item.id, { quantity: Number(value) }),
      );
    }
  };

  return (
    <article className={styles.item}>
      <div className={styles.itemHeader}>
        <p>{firstMayusc(item.product.title)}</p>
        <button onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} className="fa fa-trash" />
        </button>
      </div>
      <div className={styles.itemBody}>
      </div>
      <div className={styles.itemFooter}>
        <Select
          options={productQuantity}
          quantity={item.quantity}
          updateItems={updateItems}
        />
        <p>${item.product.price}</p>
      </div>
    </article>
  );
};

export default CartItem;
