import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useGetCart = ({ userToken }) => {
  const cart = useSelector((state) => state.cart);

  const getCart = (userToken) => {
    const init = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    fetch(`${apiUrl}/api/v1/cart`, init)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
};
