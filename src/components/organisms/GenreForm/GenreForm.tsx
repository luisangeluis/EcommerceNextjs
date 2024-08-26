"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//STYLES
import styles from "./GenreForm.module.scss";
//COMPONENTS
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const GenreForm = ({ termsToSearch, setTermsToSearch, setShowBtnClear }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    showCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setShowBtnClear(true);
      setTermsToSearch({
        ...termsToSearch,
        categoryId: selectedCategory,
        page: 1,
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (!termsToSearch.categoryId) {
      setSelectedCategory("");
    }
  }, [termsToSearch]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const showCategories = async ():Promise<any[]> => await fetch(`${apiUrl}/api/v1/categories`);

  return (
    <section className={styles.genreFormContainer}>
      <FormControl>
        <FormLabel className={styles.genreFormLabel}>Category</FormLabel>
        <RadioGroup
          row={false}
          aria-labelledby="categories"
          name="categories"
          className={styles.categories}
          value={selectedCategory}
          onChange={handleChange}
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

export default GenreForm;
