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
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setTermsToSearch({ categoryId: selectedCategory });
  }, [selectedCategory]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
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
      {selectedCategory && (
        <div>
          <button
            onClick={() => {
              setSelectedCategory("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
};

export default GenreForm;
