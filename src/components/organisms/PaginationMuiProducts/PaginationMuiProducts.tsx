import PaginationMui from "@/components/molecules/CustomPagination/PaginationMui";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PaginationMuiProducts = () => {
  const products = useSelector((state) => state.products);
  const termsToSearch = useSelector((state) => state.termsToSearch);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPage = termsToSearch.page;
    if (page !== currentPage) {
      dispatch(setTermsToSearch({ ...termsToSearch, page }));
    }
  }, [page]);

  const handleChange = (e, value) => setPage(value);

  return (
    <PaginationMui
      totalPages={products.totalPages}
      page={products.currentPage}
      onChange={handleChange}
    />
  );
};
export default PaginationMuiProducts;
