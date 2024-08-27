import ListMui from "@/components/molecules/ListMui/ListMui";
import getCategories from "@/utils/getCategories";
import { useEffect, useState } from "react";

const ListMuiCategories = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    getCategories()
      .then((data) => setGenres(data.data))
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(()=>{
    if(selectedGenre){
      
    }
  },[selectedGenre])

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
