import styles from "./ProductBrowser.module.scss";
import ProductInput from "@/components/molecules/ProductInput/ProductInput";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export const ProductBrowser = () => {
    return (
        <section className={styles.productBrowser}>
            {/** <div>*/}
            <FormControl className={styles.categoriesContainer}>
                <FormLabel>Category</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="categories"
                    name="categories"
                    className={styles.categories}
                >
                    <FormControlLabel value="sport" control={<Radio />} label="Sports" />
                    <FormControlLabel value="home" control={<Radio />} label="Home" />
                    <FormControlLabel
                        value="toys"
                        control={<customRadio />}
                        label="Toys" />
                </RadioGroup>
            </FormControl>
            {/**</div> */}
            <ProductInput />
        </section>
    );
};
