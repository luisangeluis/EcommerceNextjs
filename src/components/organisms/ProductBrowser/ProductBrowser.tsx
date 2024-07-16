import styles from "./ProductBrowser.module.scss";
import ProductInput from "@/components/molecules/ProductInput/ProductInput";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const ProductBrowser = () => {
  return (
    <section className={styles.productBrowser}>
      <div>
        <FormControl style={{ margin: "1rem" }}>
          <FormLabel>Category</FormLabel>
          <RadioGroup row aria-labelledby="categories" name="categories">
            <FormControlLabel
              value="sport"
              control={<Radio />}
              label="Sports"
            />
            <FormControlLabel value="home" control={<Radio />} label="Home" />
            <FormControlLabel value="toys" control={<Radio />} label="Toys" />
          </RadioGroup>
        </FormControl>
      </div>
      <ProductInput />
    </section>
  );
};

export default ProductBrowser;
