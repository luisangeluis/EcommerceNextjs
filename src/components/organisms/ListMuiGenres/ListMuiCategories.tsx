import ListMui from "@/components/molecules/ListMui/ListMui";
import getCategories from "@/utils/getCategories";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";

const ListMuiCategories = () => {
  const dispatch = useDispatch();
  const termsToSearch = useSelector((state) => state.termsToSearch);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data.data))
      .catch((err) => console.log({ err }));
  }, []);

  const handleChange = (e) =>
    dispatch(
      setTermsToSearch({
        ...termsToSearch,
        categoryId: e.target.value,
        page: 1,
      })
    );

  return (
    <ListMui
      label="Categories"
      items={categories}
      value={termsToSearch.categoryId}
      onChange={handleChange}
    />
  );
};

export default ListMuiCategories;
