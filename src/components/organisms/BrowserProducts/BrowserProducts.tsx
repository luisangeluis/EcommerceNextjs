import Browser from "@/components/molecules/Browser/Browser";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";
import { useDispatch, useSelector } from "react-redux";

const BrowserProducts = () => {
  const dispatch = useDispatch();
  const termsToSearch = useSelector((state) => state.termsToSearch);

  const handleClick = (value) => {
    if (value)
      dispatch(setTermsToSearch({ ...termsToSearch, productInfo: value }));
  };

  return (
    <Browser
      btnText="Search"
      placeholder="Type a product"
      btnCustomClass="btnThree"
      onClick={handleClick}
    />
  );
};

export default BrowserProducts;
