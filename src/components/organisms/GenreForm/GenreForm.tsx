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

const GenreForm = ({ setTermsToSearch }) => {
  const [categories, setCategories] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    const name = e.target.name;

    console.log(selectedCategory);
    console.log(name);

    //setCurrentCategory(selectedCategory);
    //setTermsToSearch({ categoryId: selectedCategory });
  };

  const getCategories = () => {
    fetch(`${apiUrl}/api/v1/categories`)
      .then((res) => res.ok === true && res.json())
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <FormControl className={styles.categoriesContainer}>
        <FormLabel className={styles.categoriesLabel}>Category</FormLabel>
        <RadioGroup
          row
          aria-labelledby="categories"
          name="categories"
          className={styles.categories}
          value={currentCategory}
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
      {currentCategory && (
        <section>
          <button onClick={setCurrentCategory("")}>Clear category</button>
        </section>
      )}
    </>
  );
};

export default GenreForm;
