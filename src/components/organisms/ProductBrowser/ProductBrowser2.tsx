import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//STYLES
import styles from "./ProductBrowser.module.scss";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import InputText from "@/components/atoms/InputText/InputText";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ProductBrowser2 = ({ termsToSearch, setTermsToSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory)
      setTermsToSearch({
        ...termsToSearch,
        categoryId: selectedCategory,
        page: 1,
      });
  }, [selectedCategory]);

  const handleClick = () => {
    if (inputValue)
      setTermsToSearch({ productInfo: inputValue, page: 1, categoryId: "" });
  };

  const getCategories = async () => {
    try {
      const data = await fetch(`${apiUrl}/api/v1/categories`);
      const categories = await data.json();

      setCategories(categories.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles.productBrowserContainer}>
      <div>
        <InputText
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"Type a term"}
          value={inputValue}
        />
        <BtnCustom onClick={handleClick} customClass={"btnBlack"}>
          Search
        </BtnCustom>
      </div>
      <FormControl>
        <FormLabel className={styles.genreFormLabel}>Category</FormLabel>
        <RadioGroup
          row={false}
          aria-labelledby="categories"
          name="categories"
          className={styles.categories}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories?.map((c, i) => (
            <FormControlLabel
              key={i}
              value={c.id}
              control={<Radio />}
              label={c.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </section>
  );
};

export default ProductBrowser2;
