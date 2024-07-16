//STYLES
import styles from "./GenreForm.module.scss";
//COMPONENTS
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const GenreForm = () => {
  return (
    <FormControl className={styles.categoriesContainer}>
      <FormLabel className={styles.categoriesLabel}>Category</FormLabel>
      <RadioGroup
        row
        aria-labelledby="categories"
        name="categories"
        className={styles.categories}
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
