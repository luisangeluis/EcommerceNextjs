import { setUserToken } from "@/store/slices/userTokenSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetToken = () => {
  const userToken = useSelector((state) => state.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== undefined) {
      const currenToken = localStorage.getItem("ecoUserToken");

      if (currenToken) {
        if (userToken !== currenToken) {
          dispatch(setUserToken(currenToken));
        }
      }
    }
  }, [userToken]);

  return [userToken];
};

export default useGetToken;
