import ListMui from "@/components/molecules/ListMui/ListMui";
import getCategories from "@/utils/getCategories";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";

const ListMuiCategories = () => {
  const dispatch = useDispatch();
  const termsToSearch = useSelector((state) => state.termsToSearch);

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    getCategories()
      .then((data) => setGenres(data.data))
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      dispatch(
        setTermsToSearch({ ...termsToSearch, categoryId: selectedGenre })
      );
    }
  }, [selectedGenre]);

  useEffect(() => {
    setSelectedGenre(termsToSearch.categoryId);
  }, [termsToSearch]);

  const handleChange = (e) => setSelectedGenre(e.target.value);

  return (
    <ListMui
      label="Categories"
      items={genres}
      value={selectedGenre}
      onChange={handleChange}
    />
  );
};

export default ListMuiCategories;
