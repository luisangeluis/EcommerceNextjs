import { setUserToken } from "@/store/slices/userTokenSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const useGetToken = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.userToken);

  useEffect(() => {
    if (typeof window !== undefined) {
      const currenToken = localStorage.getItem("ecoUserToken");

      //   if (currenToken) {
      //     if (userToken !== currenToken) {
      //       dispatch(setUserToken(currenToken));
      //     }
      //   }
    }
  }, [userToken]);

  return userToken;
};

export default useGetToken;
