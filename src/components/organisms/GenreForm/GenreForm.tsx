//STYLES
import styles from "./GenreForm.module.scss";
//COMPONENTS
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const GenreForm = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState();
  const [currentCategory, setCurrentCategory] = useState();

  //TODO to make endpoint of categories

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = () => {
    //dispatch(getProducts({ cate }));
  };

  const getCategories = () => {
    fetch(`${apiUrl}/api/v1/categories`)
      .then((res) => res.ok)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };

  return (
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
        <FormControlLabel
          value="sport"
          control={<Radio color="default" />}
          label="Sports"
        />
        <FormControlLabel
          value="home"
          control={<Radio color="default" />}
          label="Home"
        />
        <FormControlLabel
          value="toys"
          control={<Radio color="default" />}
          label="Toys"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GenreForm;
