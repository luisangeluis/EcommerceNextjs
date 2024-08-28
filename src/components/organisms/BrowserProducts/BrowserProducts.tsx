import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import Browser from "@/components/molecules/Browser/Browser";
import { useEffect, useState } from "react";

const BrowserProducts = () => {
  const dispatch = useDispatch();
  const termsToSearch = useSelector((state) => state.termsToSearch);
  const [value,setValue] = useState("");

  useEffect(()=>{
    setValue(termsToSearch.productInfo);
  },[termsToSearch])
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleClick = (value) => {
    if (value)
      dispatch(setTermsToSearch({ productInfo: value }));
  };

  return (
    <Browser
      value={value}
      onChange={handleChange}
      btnText="Search"
      placeholder="Type a product"
      btnCustomClass="btnThree"
      onClick={handleClick}
    />
  );
};

export default BrowserProducts;
