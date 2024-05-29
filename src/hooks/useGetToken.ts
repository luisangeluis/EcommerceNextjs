import { setUserToken } from "@/store/slices/userTokenSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetToken = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.userToken);

  useEffect(() => {
    if (typeof window !== undefined) {
      const currenToken = localStorage.getItem("ecoUserToken");

      if (currenToken) {
        if (userToken !== currenToken) {
          dispatch(setUserToken(currenToken));
        }
      }
    }
    // }, [userToken]);
  }, [userToken]);

  return userToken;
};

export default useGetToken;
