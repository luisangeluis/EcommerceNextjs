import { useEffect, useState } from "react";
import BrowserProducts from "../BrowserProducts/BrowserProducts";
import ListMuiCategories from "../ListMuiGenres/ListMuiCategories";
import { useDispatch, useSelector } from "react-redux";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";

const ProductSearchSection = () => {
  const termsToSearch = useSelector((state) => state.termsToSearch);
  const dispatch = useDispatch();
  const [showBtnClear, setShowBtnClear] = useState(false);

  useEffect(() => {
    if (termsToSearch.productInfo || termsToSearch.categoryId) {
      setShowBtnClear(true);
    } else {
      setShowBtnClear(false);
    }
  }, [termsToSearch]);

  const handleClick = () =>
    dispatch(
      setTermsToSearch({
        page: 1,
        productInfo: "",
        categoryId: "",
      })
    );

  return (
    <>
      <BrowserProducts />
      <ListMuiCategories />
      {showBtnClear === true && (
        <BtnCustom onClick={handleClick} customClass={"btnBorderBlack"}>
          Clear all
        </BtnCustom>
      )}
    </>
  );
};

export default ProductSearchSection;
