import PaginationMui from "@/components/molecules/CustomPagination/PaginationMui";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PaginationMuiProducts = () => {
  const products = useSelector((state) => state.products);
  const termsToSearch = useSelector((state) => state.termsToSearch);
  const dispatch = useDispatch();
  //const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const currentPage = termsToSearch.page;
  //   if (page !== currentPage) {
  //     dispatch(setTermsToSearch({ ...termsToSearch, page }));
  //   }
  // }, [page]);

  if (!products.totalPages) return;

  const handleChange = (e, value) => {
    dispatch(setTermsToSearch({ ...termsToSearch, page: value }));
  };

  return (
    <PaginationMui
      totalPages={products.totalPages}
      page={products.currentPage}
      onChange={handleChange}
    />
  );
};
export default PaginationMuiProducts;
